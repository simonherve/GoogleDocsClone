interface DocumentIdPageProps {
    params: Promise<{ documentId: string}>;
};

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
    //const awaitedParams = await params;
    //const documentId = awaitedParams.documentId;
    const { documentId } = await params;
    
    return (
        <div>
            Document ID: {documentId}
        </div>
    );
}

export default DocumentIdPage;