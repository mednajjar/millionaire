import React from 'react'

const loginForm = () => {
    return (
        <main>
            <div className="d-flex mt-5 col-6 mx-auto justify-content-center">
            <form className="col-5">
                <div className="card p-3">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary col-12">Submit</button>
            </div>
            </form>
            </div>
        </main>
    )
}

export default loginForm;
