const dataArrayEvent = [
    {
        title: 'Sights & Sound Exhibition',
        date: 'Thue, 18 Nov, 02.00 PM',
        imanges: '/Asset/img/bitmap3.jpg'
    },
    {
        title: 'See it in Gold Class',
        date: 'Sun, 20 Nov, 09.00 PM',
        imanges: '/Asset/img/bitmap2.png'
    },
    {
        title: 'Sights & Sound Exhibition',
        date: 'Mon, 24 Nov, 10.00 PM',
        imanges: '/Asset/img/bitmap1.png'
    },
    {
        title: 'See it in Gold Class',
        date: 'Sun, 04 Des, 9.00 PM',
        imanges: '/Asset/img/bitmap4.jpg'
    },
    {
        title: 'Sights & Sound Exhibition',
        date: 'Wed, 15 Des, 9.00 PM',
        imanges: '/Asset/img/bitmap5.jpg'
    },
    {
        title: 'See it in Gold Class',
        date: 'Sat, 20 Des, 03.00 PM',
        imanges: '/Asset/img/bitmap6.jpg'
    },
]

let allDataEvent = ''
dataArrayEvent.map((data) => {
    allDataEvent += `<div class="bg-gray-400 w-[260px] h-[376px] rounded-[40px] flex bg-cover bg-center overflow-hidden"
style="background-image: url(${data.imanges});">
<div
    class="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,5,50)] self-end p-[20px] pr-[5px] text-white">
    <div class="mb-[5px]">${data.date}</div>
    <a href="/Event-Page-1.html">
        <div class="mb-[25px] tracking-widest text-2xl font-semibold">${data.title}
        </div>
    </a>
    <div class="flex ml-3">
        <img class="rounded-full w-8 h-8 -ml-3 border-2 border-white-500 -ml-3 "
            src="/Asset/img/Avatar.png" alt="">
        <img class="rounded-full w-8 h-8 -ml-3 border-2 border-white-500 -ml-3 "
            src="/Asset/img/Avatar-1.png" alt="">
        <img class="rounded-full w-8 h-8 -ml-3 border-2 border-white-500 -ml-3 "
            src="/Asset/img/Avatar-2.png" alt="">
        <img class="rounded-full w-8 h-8 -ml-3 border-2 border-white-500 -ml-3 "
            src="/Asset/img/Avatar-3.png" alt="">
    </div>
</div>
</div>`
})
console.log(allDataEvent)
const eventWrapper = document.getElementById('eventwrapper')
eventWrapper.innerHTML = allDataEvent

const menu = document.getElementById('menu')
const menuToggle = document.getElementById('menu-toggle')

menuToggle.addEventListener('click', () => {
    const token = menu.classList
    if(token.contains('hidden')){
        token.remove('hidden')
    } else {
        token.add('hidden')
    }
})