# 示例代码

```java
public class SimpleDateFormatTest {

    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static void main(String[] args) {
        SimpleDateFormatTest simpleDateFormatTest = new SimpleDateFormatTest();
        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                int random = new Random().nextInt(10);
                Date date = new Date(System.currentTimeMillis() - 1000L * 60 * 60 * 24 * random);
                String newFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
                String propertyFormat = simpleDateFormatTest.simpleDateFormat.format(date);

                if (!propertyFormat.equals(newFormat)) {
                    System.out.println(Thread.currentThread().getName() + ", random : " + random + 
										 ", property format time: " + propertyFormat + 
										 ", new format time: " + newFormat);
                }
            }).start();
        }
    }
}
```