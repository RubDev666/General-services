"use server";

const urlApi = process.env.NEXT_PUBLIC_API;

export const POST_register_login = async <T>(formData: T, keyUrl: string) => {
    if (!urlApi) throw new Error('No se pudo conectar a la base de datos');

    const response = await fetch(`${urlApi + keyUrl}`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    return response.json();
}

export const GET_user = async (idUser: string) => {
    if (!urlApi) throw new Error('No se pudo conectar a la base de datos');

    const response = await fetch(`${urlApi}/usuarios/${idUser}`).then(res => res.json());

    return response;
}

export const POST_create_service = async <T>(formData: T, token: string) => {
    if (!urlApi) throw new Error('No se pudo conectar a la base de datos');

    const response = await fetch(`${urlApi}/servicios`, {
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
    });

    return response.json();
}

export const GET_services = async (url: string) => {
    if (!urlApi) throw new Error('No se pudo conectar a la base de datos');

    const response = await fetch(`${urlApi}${url}`).then(res => res.json());

    return response;
}

export const GET_user_services = async (idUser: string, token: string) => {
    if (!urlApi) throw new Error('No se pudo conectar a la base de datos');

    const response = await fetch(`${urlApi}/usuarios/${idUser}/servicios`, {
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        },
    });

    return response.json();
}

export const DELETE_user_service = async ({idUser, idService, token}: Record<"idUser" | "idService" | "token", string>) => {
    if (!urlApi) throw new Error('No se pudo conectar a la base de datos');

    const response = await fetch(`${urlApi}/usuarios/${idUser}/servicios/${idService}`, {
        method: "delete",
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        },
    });

    return response.json();
}