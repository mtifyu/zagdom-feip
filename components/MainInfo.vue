<template>
    <div class="grid">
        <div class="text">
            <h1>Каждый проект <br> для нас — важный</h1>
            <p>Мы строительная компания полного цикла. </p>
            <p>Вникаем во все детали, разрабатываем планировку будущего дома, продумываем конструктивные решения и общую архитектурную концепцию</p>
        </div>
        <div class="card">
            <img src="/public/icons/Vector.png" alt="house">
            <div class="card-text">
                <h2>57 домов</h2>
                <p>спроектировали и построили “под ключ”</p>
            </div>
        </div>
        <div class="card2">
            <img src="/public/icons/calendar.png" alt="calendar">
            <div class="card-text">
                <h2>14 лет</h2>
                <p>мы на рынке загородного строительства</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 24px 26px;
    margin-bottom: 150px;
    gap: 5px;
}
.text {
    width: 100%;
    height: auto;
    max-width: 100%;
}
.text h1 {
    color: rgb(0, 0, 0);
    font-family: 'Montserrat';
    font-size: 38px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
}
.text p + p {
    margin-top: 16px; /* Отступ между двумя абзацами */
}
.text p {
    color: rgb(102, 102, 102);
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 135%;
    letter-spacing: 0%;
    text-align: left;
}
.card, .card2{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    background-color: rgba(245, 247, 243, 1);
    border-radius: 20px;
    width: 304px;
    height: 187px;
}
.card-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.card h2, .card2 h2{
    margin: 0;
    padding: 0;
    color: rgb(0, 0, 0);
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
}
.card p, .card2 p{
    margin: 0;
    padding: 0;
    color: rgb(102, 102, 102);
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 135%;
    letter-spacing: 0%;
    text-align: left;
}

@media (max-width: 1150px) {
    .text {
        width: 100%;
        height: auto; 
    }
    .grid {
        grid-template-columns: 1fr; /* одна колонка */
        grid-auto-rows: auto;
        gap: 10px;
    }
}
@media (max-width: 768px) {
    .text {
        width: 100%;
        height: auto;
    }
    .text h1 {
        font-size: 28px;
    }
    .text p {
        font-size: 20px;
    }
    .grid {
        grid-template-columns: 1fr; /* одна колонка */
        grid-auto-rows: auto;
        gap: 10px;
    }
}
</style>