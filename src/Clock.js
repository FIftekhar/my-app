
  
export default function Clock() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return element;
}
  
// setInterval(tick, 1000);