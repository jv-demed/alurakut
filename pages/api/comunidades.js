import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response){

    if(request.method === 'POST'){

        const TOKEN = 'be35f77804aeee9f2081947f8c49e0';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: '972987',
            ...request.body,
            // title: '',
            // imageUrl: '',
            // creatorSlug: ''
        })
    
        response.json({
            registroCriado: registroCriado
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}