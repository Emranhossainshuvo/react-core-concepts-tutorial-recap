export default function User({user}) {
    const {name, email} = user || {}; 
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email} </p>
        </div>
    )
}