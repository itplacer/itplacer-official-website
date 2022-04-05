import style from "./style.module.css"
import Reviewer from './assets/reviewer.jpg'
const Index=()=>{
    return(
        <div className={style.reviewCard}>
            <div className={style.card}>
                    <img className={style.reviewerImg} src={Reviewer} alt="reviewerImg" />
                <div className={style.reviewCardTop}></div>
                <div className={style.reviewerName}>
                    <h3>Kunal</h3>
                    <p>SDE, Amazon</p>
                </div>
                <div className={style.review}> <hr className={style.horizontalLine}/> Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi magni ad numquam nemo aspernatur id vel laborum iure corrupti similique repellendus facilis quo, alias quas reiciendis! Placeat possimus mollitia deserunt nostrum. Voluptatem quae nobis architecto, vel voluptatibus deserunt tenetur fugit maxime nihil consectetur sed doloribus vitae minus cum explicabo optio? ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, labore earum corporis incidunt harum ratione quo nisi recusandae sit aut!</div>
            </div> 
        </div>
    )
}
export default Index