import React from 'react';
import styles from "./LandingTable.module.css"
import {Container} from "react-bootstrap";

const LandingTable = () => {
    return (
        <div className={`${styles.landingMain}`}>
            <Container>
                <p className={`text-center ${styles.customTableHeader}`}>Комплексний еколого-економіко-енергетичний моніторинг (КЕЕЕМ) базується на таких основних принципах:</p>
                <div className={`position-absolute start-50 translate-middle ${styles.customTable}`}>
                    <table className={`text-center ${styles.tableHome}`}>
                        <tr>
                            <td className={styles.tdHome}>
                                Збір різнорідної екологічної інформації з різних точок регіону.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdHome}>
                                Оброблення великих масивів даних різними експертами.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdHome}>
                                Одночасна робота різних експертів з екологічною інформацією та інформацією від інших
                                експертів.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdHome}>
                                Відображення екологічної інформації на карті місцевості для наочності.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdHome}>
                                Дослідження екологічної інформації за допомогою різних видів математичного аналізу.
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdHome}>
                                Оцінка ситуації у визначеному регіоні з точки зору закону та визначення законності набору
                                заходів по покращенню екологічного стану регіону або ліквідації наслідків надзвичайних
                                ситуацій.
                            </td>
                        </tr>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default LandingTable;