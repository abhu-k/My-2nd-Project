let Count = 0;
const countDisplay = document.getElementById("Count");
const incrementbtn = document.getElementById("increment");
const decrementbtn = document.getElementById("decrement");

incrementbtn.onclick = () =>
{
    Count ++;
    countDisplay.textContent = Count;
}
decrementbtn.onclick = () =>
{
    Count --;
    countDisplay.textContent = Count;
}