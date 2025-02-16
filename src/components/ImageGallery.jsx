import style from '../pages/home/page.module.css'

function ImageGallery() {
  return (
    <section className={style["image-gallery"]}>
      <div className={style["gallery-item"]}>
        <img src="https://www.echoroukonline.com/wp-content/uploads/2024/09/alge.jpg" alt="Historical Image 1" />
        <div className={style["caption"]}>ENCYCLOPEDIA</div>
      </div>
      <div className={style["gallery-item"]}>
        <img src="https://www.aps.dz/ar/media/k2/items/cache/ac3dda62a5e727438153e6342070c176_M.jpg" alt="Historical Image 2" />
        <div className={style["caption"]}>INTRODUCTION TO THE HOLOCAUST</div>
      </div>
      <div className={style["gallery-item"]}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_61gHjdi9bzC-XUs-s_djvojLayowacsM2Q&s" alt="Historical Image 3" />
        <div className={style["caption"]}>RESOURCES FOR EDUCATORS</div>
      </div>
    </section>
  )
}
export default ImageGallery;