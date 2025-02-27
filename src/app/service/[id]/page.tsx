export default async function UserPage({ params }: {params: Promise<{ id: string }>}) {
    const { id } = await params;

    return(
        <p>id service {id}</p>
    )
}
