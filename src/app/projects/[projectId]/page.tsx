export default function ProjectDetails({
    params,
}: {
    params: { projectId: string };
}) {
    return <h1>Details about project {params.projectId}</h1>
}