export default async function handler(req, res) {
    const tienda = "837u5x-me.myshopify.com";
    const token = process.env.SHOPIFY_TOKEN; // Aquí usamos la llave secreta

    try {
        const respuesta = await fetch(`https://${tienda}/api/2024-01/graphql.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Storefront-Access-Token': token,
            },
            body: JSON.stringify({
                query: `{
                    products(first: 10) {
                        edges {
                            node {
                                handle
                                title
                                images(first: 1) { edges { node { url } } }
                                variants(first: 1) { edges { node { price { amount } } } }
                            }
                        }
                    }
                }`
            })
        });

        const datos = await respuesta.json();
        // Limpiamos los datos para la calculadora
        const productos = datos.data.products.edges.map(p => ({
            title: p.node.title,
            handle: p.node.handle,
            image: { src: p.node.images.edges[0]?.node.url },
            variants: [{ price: p.node.variants.edges[0].node.price.amount }]
        }));

        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
}
