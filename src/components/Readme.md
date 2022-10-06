----------------------------- HƯỚNG LÀM BÀI -----------------------------
1. phân chia component
2. xây dựng layout
-   windown
-   taplet
-   mobile
3. render song
4. heart and heart store
5. player song
6. slider music
7. CD rotate
8. time start , time end
9. control --- play, pause, next, prev, 
10. scroll play list

----------------------------- PHẦN CHÚ THÍCH -----------------------------
1. const [status, setStatus] = React.useState('stop')

--- cái này thể trạng thái {status} là 'stop' 
--- khi nghe một event nào đó thì mình phải {setStatus}

liên quan đến việc chạy hay dừng.


2. const [songIndex, setSongIndex] = React.useState(0)

--- cái này thể hiện id bài hát {songIndex} là 0 <=> 1 trong data
---  khi có 1 sự kiện click vào thì mình phải {setSongIndex} cho nó

liên quan đến các sự kiện click chuột vào thì ta phải setIndex cho nó 

3. const [currentTime, setCurrentTime] = React.useState(0)

--- cái này thể hiện thời gian khởi chạy với giá trị ban đầu là {currentTime} là 0
--- cái này phụ thuộc vào 1 Audio Element nên t thông qua cái {refPlayer} -> tự đặt
--- khi có sự thay đổi hay gì đó thì mình phải {setCurrentTime} bằng vs giá trị onchage của sự kiện

4. const refPlayer = React.useRef(null)

--- cái này là 1 phương tiện điều khiển giúp cái này có thể truy cập đến element khác như dom html.

