/**
 * 
 * simple but not the best way
 * 1.from client side sent information
 * 2.generate token jwt.sign()
 * 3.on the client side set token to the localstorage
 */

/**
 * using http only cookies
 * 
 * 1.from client side send the information(email,better:firebase er auth token ) to generate token
 * 2.on the server side,accept user information and if needed validate it
 * 3.generate token in the server side using secret and expiresIn
 * 
 * -----------
 * set the token to the cookies
 * 4.while calling the api tell to us withCredentials
 * axios.post('http://localhost:3000/jwt',userData,{
                   { withCredentials:true}
                })


    *5.in the cors setting set credentials and origin
    app.use(cors({
        origin:['http://localhost:5173'],
            credentials:true
    }))
    6.after generating the tokens set it to thecookies with some options

            res.cookie('token',token,{
            httpOnly:true,
            secure:false
        })
    
        7.ont time:use cookieparser as middleware
        8.for every api you want to verify token:in the client side:if using axios withCredentials:true,
        for fetch:credentials include


        ------------------
        verify token:
        9.check token exists.if not, return 401---->unauthorized
        10.jwt.verify function.if err return 401---->unauthorized
        11.if token is valid set the decoded value to the req object
        12.if data asking for doesn't match with the owner or bearer of the token---->403----->forbidden
 */


        /***
         * approach to jwt
         * okay type
         * 1.generate jwt> send to the client>store in the local storage>send the token to the server using header>on the server verify token
         * 
         * in general Best approach
         * 2.generate token>set token to the cookies>ensure client and server exchanges cookies>on the server verify token
         * 
         * firebase authentication approach
         * 1.already have the token in firebase(client side)>we will send the token to the server using auth header>verifythe token
         */