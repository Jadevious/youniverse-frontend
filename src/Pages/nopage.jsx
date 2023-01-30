const NoPage = () => {
    return (
        <div className="container App-foundation App-center">
            <div className="p-3 bg-danger rounded">
                <h1>Sorry! No page with the specified path exists</h1>
            </div>
            <a href='/' className="btn btn-outline-info mt-4">Return Home</a>
        </div>
        
    )
}

export default NoPage;