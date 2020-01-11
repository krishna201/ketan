import React from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import { Carousel } from "antd";
import PIC1 from "../../assets/images/IMG-20191120-WA0138.jpg";
import PIC2 from "../../assets/images/IMG-20191120-WA0190.jpg";
import PIC3 from "../../assets/images/IMG-20191120-WA0184.jpg";
import PIC4 from "../../assets/images/IMG-20191120-WA0157.jpg";
import "./home.style.scss";
class Home extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <div className="home">
          <h2>
            સમસ્ત મારુ પ્રજાપતિ મંડળ આમદવાદ સમાજ આપનું હાર્દિક સ્વાગત કરે છે
          </h2>
          <Carousel autoplay>
            <div>
              <img style={{ objectFit: "contain" }} alt="img-1" src={PIC1} />
            </div>
            <div>
              <img style={{ objectFit: "contain" }} alt="img-1" src={PIC2} />
            </div>
            <div>
              <img style={{ objectFit: "contain" }} alt="img-1" src={PIC3} />
            </div>
            <div>
              <img style={{ objectFit: "contain" }} alt="img-1" src={PIC4} />
            </div>
          </Carousel>
          <div className="home-contain">
            <p>
              પ્રત્યેક વ્યક્તિ પોતાના સમાજનો એક ઘટક છે અને વ્યક્તિનો વિકાસ તેના
              સામાજિક રીત – રીવાજો અને સમાજની જીવન-શૈલી પર આધારિત છે. આ સાથે જ
              સમાજનો વિકાસ તેના ઘટક સમી વ્યક્તિની શૈક્ષણિક પ્રતિભા અને તેના
              પરિવારની સમૃદ્ધિ ઉપર આધારિત છે.
            </p>

            <p>
              સમાજમાં શિક્ષણનું સ્તર જેટલું ઊંચું અને સમાજ પ્રત્યેની વ્યક્તિની
              સમાજભાવના તથા સહકાર-ભાવના જેટલી ઉંચી એટલી સમાજની પ્રતિભા ઉજળી
              દેખાવાની. સમાજના નીતિ – નિયમો અને રીત – રીવાજો ઉપર વ્યક્તિની જેટલી
              વધારે આદર – ભાવના તેટલો જ સમાજ વધારે સંગઠિત અને શિસ્તબદ્ધ બની શકે
              છે.
            </p>
            <p>
              સમાજમાં શિક્ષણનું સ્તર જેટલું ઊંચું અને સમાજ પ્રત્યેની વ્યક્તિની
              સમાજભાવના તથા સહકાર-ભાવના જેટલી ઉંચી એટલી સમાજની પ્રતિભા ઉજળી
              દેખાવાની. સમાજના નીતિ – નિયમો અને રીત – રીવાજો ઉપર વ્યક્તિની જેટલી
              વધારે આદર – ભાવના તેટલો જ સમાજ વધારે સંગઠિત અને શિસ્તબદ્ધ બની શકે
              છે.
            </p>
          </div>
        </div>
      </ContainerLayout>
    );
  }
}

export default Home;
