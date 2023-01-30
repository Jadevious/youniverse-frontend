import '../App.css';
const Homepage = () => {
    return (
        <div className='App-center App-foundation container'>
            <h2>Welcome to your Universe.</h2>
            <h1>The <strong>YOUniverse</strong>.</h1>
            <a type='button' href='/login' className='btn btn-outline-primary mt-3'>Get Started</a>
        </div>
    )
}

export default Homepage;