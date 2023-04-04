import React from "react";
import Layout from "./Layout";
import { experiences, skills, projects } from "../profile";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <header className='row'>
        <div className='col-md-12' style={{ color: "#FFF" }}>
          <div className='card card-body bg-primary'>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src='iouxaf.png'
                  alt='Foto de presentacion'
                  className='img-fluid'
                />
              </div>
              <div className='col-md-8'>
                <h1>Rauniel Matos Ramirez</h1>
                <h3>Frontend Developer </h3>
                <p>
                  Taking the default navbar component and showing how it can be
                  moved, placed, and extended. Bootstrap employs a handful of
                  important global styles and settings, all of which are almost
                  exclusively geared towards the normalization of cross browser
                  styles. Lets dive in.
                </p>
                <a href='/'>Here me</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Second section */}
      <div className='row' style={{ marginTop: "10px" }}>
        <div className='col-md-4'>
          <div className='card bg-ligth'>
            <div className='card-body'>
              <h1>Skills</h1>
              {skills.map((skill, i) => (
                <div key={i} style={{ marginTop: "27px" }}>
                  <h5>{skill.skill}</h5>

                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='card bg-ligth'>
            <div className='card-body'>
              <h1>Experience</h1>
              <ul>
                {experiences.map((ex, i) => (
                  <li key={i}>
                    <h3>{ex.title}</h3>
                    <h5>
                      {ex.from}-{ex.to}
                    </h5>
                    <p>{ex.description}</p>
                  </li>
                ))}
              </ul>
              <Link href='/experiencies'>
                <a className='btn btn-light'>Know More=</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Portafolio */}
      <div className='row' style={{ marginTop: "20px" }}>
        <div col-md-12>
          <div className='card'>
            <div className='card-body bg-primary'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1 className='text-center text-light'>Portfolio</h1>
                </div>

                {projects.map((pro, i) => (
                  <div key={i} className='col-md-4 p-2'>
                    <div className='card h-100'>
                      <div className='overflow'>
                        <img
                          src={pro.image}
                          className='card-img-top'
                          alt={pro.name}
                          style={{height:"100%"}}

                        />
                      </div>
                      <div className='card-body'>
                        <h5>{pro.name}</h5>
                        <p>{pro.description}</p>
                        <a className='btn btn-primary' href='#'>
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
