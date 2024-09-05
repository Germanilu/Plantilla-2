import { useTranslations } from "next-intl";
import Image from 'next/image';
import avocadotoast from "../../../static/media/img/br-avocadotoast.jpg";
import { menu } from '@/static/menu';
import './page.scss';

export default function Menu() {
  const t = useTranslations("Menu");
  const starters = menu.starters
  const main = menu.main
  const dessert = menu.dessert
  return (
    <div className="menu-design">
      <h1 className="menu-title">{t('title')}</h1>
      <div className="menu-container">
        <div className="container">
          <p>{t('starters')}</p>
          {
            starters.map((dish) => {
              return (
                <div className="dish-container" key={dish.id}>
                  <div className="image-container">
                    <Image className="img" src={dish.img.src} alt="menu-savana" width={200} height={200} quality={100} />
                  </div>
                  <div className="dish-text">
                    <span className="dish-name">{t(`${dish.dishName}`)}</span>
                    <span className="dish-description">{t(`${dish.dishDescription}`)}</span>
                  </div>
                </div>
              )
            })
          }

        </div>


        <div className="container">
          <p>{t('main')}</p>
          {
            main.map((dish) => {
              return (
                <div className="dish-container" key={dish.id}>
                  <div className="image-container">
                    <Image className="img" src={dish.img.src} alt="menu-savana" width={200} height={200} quality={100} />
                  </div>
                  <div className="dish-text">
                    <span className="dish-name">{t(`${dish.dishName}`)}</span>
                    <span className="dish-description">{t(`${dish.dishDescription}`)}</span>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div className="container">
          <p>{t('dessert')}</p>
          {
            dessert.map((dish) => {
              return (
                <div className="dish-container" key={dish.id}>
                  <div className="image-container">
                    <Image className="img" src={dish.img.src} alt="menu-savana" width={200} height={200} quality={100} />
                  </div>
                  <div className="dish-text">
                    <span className="dish-name">{t(`${dish.dishName}`)}</span>
                    <span className="dish-description">{t(`${dish.dishDescription}`)}</span>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}