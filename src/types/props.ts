import type { UserData } from "./store";

export type NavItemsInitialProps = {
    mobileSize: boolean;
}

export type NavItemsSessionProps = Pick<UserData, "username" | "email" | "id_usuario">;

export type ErrorProps = Record<"title" | "message", string>;