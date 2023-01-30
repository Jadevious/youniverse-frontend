import '../App.css';

const Login = () => {
    return (
        <div className='container App-foundation p-3 mt-5'>
            <h2 className='text-center'>Login to your Youniverse</h2>
            <form>
                <div className="mb-3 mt-3">
                    <label for="email" class="form-label h4">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className='mb-3 mt-3'>
                    <label for="password" class="form-label h4">Password:</label>
                    <input type="password" className="form-control" id="password" />
                </div>
            </form>
        </div>
    )
}

export default Login;