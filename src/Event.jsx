export default function Event(){

    const handleClickme = () => {
        alert('button clicked');
    }
     
    const handleMultiflyButton = (num) => {
        const multiply = num * num; 
        alert(multiply);
    }

    return (
        <div>
            <button onClick={handleClickme}>Click me</button>
            <button onClick={() => {confirm('hi')}}>Confirm</button>
            <button onClick={()=> {handleMultiflyButton(10)}}>multiply</button>
            <button onClick={() => {prompt('whats your name?')}}>Name</button>
        </div>
    )
}