/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { createMainContext } from '../../component/Context';
import { useRouter } from 'next/router';
import classes from './View.module.css';
import Spinner from '../../component/Spinner';



const View = () => {
  const { text, setText } = useContext(createMainContext);
  var router = useRouter();

  if (typeof window !== 'undefined' && !text.ingredients) {
    router.push('/recipe');
  }  
 

  if (text.ingredients) {
    var arrIng = []
    arrIng = text.ingredients.split('.');
    arrIng.pop();
  };
  if (text.procedure) {
    var arrProc = []
    arrProc = text.procedure.split('.');
    arrProc.pop();
  };


  return <section className={`${classes.view_recipe}`} style={{ marginBottom: text.ingredients ? '0%' : '30%' }}>
    {
      !text.ingredients
        ? <section className="h3 text-center mt-5">Cooking Up...</section>
        : <div className="card  shadow p-3 mt-5">
          <main className="row">
            <div className="col-md-5" style={{ padding: '10px 20px' }}>
              <Image src={`${text.img}`}
                className={`${classes.recipe_img} rounded p-3 card-img-top`}
                alt="SOME" width="450" height="350" />
            </div >
            <div className={`col-md-6 mt-1 ${classes.recipe_body}`}>
              <h2>{text.title}</h2>
              <p>{text.description}
              </p>
              <article className="text-center">
                <h5>Cooking Time <br /> <span>{text.cook_time}min</span></h5>
                <h5>Prepration Time <br /> <span>{text.prep_time}min</span></h5>
              </article>
              <p className={`${classes.recipe_tags} h4 mt-4`}><b>Tags: </b>
                <Link href="/recipe"><span onClick={() => setText(text.category)}
                  className="badge bg-info">{text.category}</span></Link>
              </p>
            </div>
            <div className="col-md-1"></div>
          </main >
          <section className={`${classes.recipe_part} row mt-2`}>
            <div className="col-md-5 mb-4">
              <h2>Ingridents</h2>
              <ul>
                {
                  arrIng && arrIng.map((items, i) => {
                    return <li key={i}>{items}</li>
                  })
                }
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Procedure</h2>
              <ul>
                {
                  arrProc && arrProc.map((items, i) => {
                    return <li key={i}>{items}</li>
                  })
                }
              </ul>
            </div>
          </section>
        </div >
    }
  </section >
}

export default View;