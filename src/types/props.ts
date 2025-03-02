import type { UserData } from "./store";
import type { Service } from "./server-response";
import { Dispatch, SetStateAction } from "react";

export type NavItemsInitialProps = {
    mobileSize: boolean;
}

export type NavItemsSessionProps = Pick<UserData, "nombre" | "correo" | "id_usuarios">;

export type ErrorProps = Record<"title" | "message", string>;

export type FormLayoutProps = {
    nameForm: string;
    children: React.ReactNode;
}

export type DropzoneProps = {
    setImg: Dispatch<SetStateAction<File | null>>;
}

export type TableServicesProps = {
    setDeleteService: Dispatch<SetStateAction<Service | null>>
    services: Service[];
}
