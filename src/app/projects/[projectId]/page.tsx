export default async function ProjectDetails(
    props: {
        params: Promise<{ projectId: string }>;
    }
) {
    const params = await props.params;
    return <h1>Details about project {params.projectId}</h1>
}