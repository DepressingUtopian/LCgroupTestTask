# Тестовое задание в компанию LCGroup

## Задача:
1. Написать web-приложение, используя Angular 10+.
2. После загрузки приложение должно отрисовать представление (view) с двумя компонентами:
- Таблица с пользователями. Данные получить Get-запросом. JSON можно скачать по ссылке.
- Панель с фильтрами.
 
Таблица должна показывать следующие столбцы:
- Имя
- Возраст
- Пол
- Департамент 
- Адрес в формате “Город, Улица”
Должна быть возможность отсортировать таблицу по любому столбцу (убывание/возрастание).
 
Панель фильтров должна показывать опции, разделённые по группам:
- Пол
- Департамент
- Город
 
Опции должны динамически генерироваться на основании данных. Т.е. в фильтре “пол”, например, две опции: “female” и “male”. В поле город -- все возможные города и т. д.
 
Опции представляют собой чекбокс “<значение фильтра> (4)”. Цифра в скобках показывает сколько раз этот фильтр встречается в отфильтрованной коллекции. Например фильтр по городу: Moscow (2)
 
При нажатии на checkbox таблица должна фильтроваться по соответствующему значению. При этом, все остальные фильтры должны пересчитаться. Нулевые фильтры (те, которые не применимы к коллекции) не показываются на экране.
 
Например: при нажатии на фильтр “Пол” - “female” в таблице отфильтровываются все женщины. При этом фильтр “male” показываться не должен.

 
Требования к вёрстке:
Страница должна быть сверстана вручную (без использования Bootstrap, Foundation и тп).
Вёрстка должна быть кроссбраузерной (не должна “ехать” в последних версиях IE Edge, Google Chrome, Firefox)
При разрешении экрана:
 >= 900px фильтры должны располагаться горизонтально (один за другим). Таблица с фильтрами имеет максимальную ширину 1200px
< 900px фильтры должны располагаться вертикально (в один столбец). А также должен скрываться столбец “Адрес”. Таблица растягивается на всю возможную ширину.


 
Задание должно быть выполнено в github репозитории. Присылайте ссылку на ваш репозиторий с выполненной работой.

Для тех кто никогда ранее не работал с Angular полезными будут данные ссылки: 
https://angular.io/guide/architecture
https://angular.io/start
