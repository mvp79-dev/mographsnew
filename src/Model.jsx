import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./ricemodel.gltf");

  const { camera, scene } = useThree()

  const model = useRef()
  
  const bracelet = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();
  

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND

    tl
    .to(model.current.rotation, {
      y: isMobile ? Math.PI * 2 : Math.PI * 2,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(".carousel-content", {
      ease: "none",
      x: () => -(cont.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: cont,
        pin: cont,
        start: "center center",
        end: () => "+=" + (cont.scrollWidth - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
      }
    })

    .to(model.current.position, {
      x: isMobile ? 0 : -8.5,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      x: 0,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(".content-one", {
      opacity: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // SECOND TO THIRD

      .to(model.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".carousel",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.position, {
        y: 4,
        scrollTrigger: {
          trigger: ".carousel",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".content-two-box", {
        opacity: 0,
          scrollTrigger: {
            trigger: ".three",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".carousel", {
          opacity: 1,
            scrollTrigger: {
              trigger: ".carousel",
              start: "top bottom",
              end: "top top",
              scrub: true,
              immediateRender: false,
            },
          })


          .to(".project-one", {
            width: isMobile ? "90%" : "70vw",
            height: isMobile ? "300px" : "60vh",
            opacity: 1,
              scrollTrigger: {
                trigger: ".project-one",
                start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

            .to(".descripton, .view-count", {
              fontSize: isMobile ? "1.25rem" : "1.75vw",
                scrollTrigger: {
                  trigger: ".project-one",
                  start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
                  end: "bottom top",
                  scrub: true,
                  immediateRender: false,
                },
              })

              .to(".channel-name", {
                fontSize: isMobile ? "1.5rem" : "1.75vw",
                  scrollTrigger: {
                    trigger: ".project-one",
                    start: "top bottom+=200", // Start when the bottom of the viewport touches the bottom of .project-one
                    end: "bottom top",
                    scrub: true,
                    immediateRender: false,
                  },
                })

            .to(".project-two", {
              width: isMobile ? "90%" : "70vw",
              height: isMobile ? "300px" : "60vh",
              opacity: 1,
                scrollTrigger: {
                  trigger: ".project-two",
                  start: isMobile ? "top bottom-=50" : "top bottom-=100",
                  end: "bottom top",
                  scrub: true,
                  immediateRender: false,
                },
              })

              .to(".project-three", {
                width: isMobile ? "90%" : "70vw",
                height: isMobile ? "300px" : "60vh",
                opacity: 1,
                  scrollTrigger: {
                    trigger: ".project-three",
                    start: isMobile ? "top bottom" : "top bottom-=200",
                    end: "bottom top",
                    scrub: true,
                    immediateRender: false,
                  },
                })

                .to(".project-four", {
                  width: isMobile ? "90%" : "70vw",
                  height: isMobile ? "300px" : "60vh",
                  opacity: 1,
                    scrollTrigger: {
                      trigger: ".project-four",
                      start: isMobile ? "top bottom" : "top bottom-=300",
                      end: "bottom top",
                      scrub: true,
                      immediateRender: false,
                    },
                  })




    })
  }, [])


  return (
    <group {...props} dispose={null}>
      <group scale={0.0115} ref={model} position={ [ 0, 0, 0 ] } >
        <group position={[-52, -64, 0]}>
          <group position={[0, 0, -6.387]}>
            <mesh
              geometry={nodes.Rectangle_4.geometry}
              position={[0, 0, -24.64]}
              rotation={[0, 0, 0.129]}
            >
              <meshPhongMaterial color={ "#ffffff" } opacity={0.05} transparent />
            </mesh>
          </group>
          <group position={[-123.691, -133.834, 23.519]}>
            <mesh
              geometry={nodes.Rectangle_7.geometry}
              position={[4.737, 0.604, -5]}
              rotation={[0, 0, 0.136]}
              scale={[1.2, 1.139, 1]}
            >
              <meshPhysicalMaterial color={"#000000"} />
            </mesh>
            <mesh
              geometry={nodes.Rectangle_7_1.geometry}
              position={[-4.737, -0.604, -5]}
              rotation={[0, 0, 0.136]}
              scale={[1.2, 1.139, 1]}
            >
              <meshPhysicalMaterial color={"#000000"} />
            </mesh>
          </group>
          <group position={[-150.473, -137.602, 24.673]}>
            <mesh
              geometry={nodes.Triangle_2.geometry}
              position={[0, 0, -6.354]}
              rotation={[0, 0, -1.451]}
            >
              <meshPhysicalMaterial color={"#000000"} />
            </mesh>
          </group>
          <group position={[-10.757, -30.765, -12.8]}>
            <mesh
              geometry={nodes.Back_Text.geometry}
              position={[-67.189, -50.814, -5.265]}
              rotation={[-Math.PI, 0, 3.019]}
            >
              <meshPhysicalMaterial color={"#000000"} />
            </mesh>
            <mesh
              geometry={nodes.Rectangle_2.geometry}
              position={[0, 0, -5]}
              rotation={[0, 0, 0.129]}
            >
              <meshPhysicalMaterial color={"#949494"} />
            </mesh>
          </group>
          <group position={[11.243, 34.235, -3.471]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_3.geometry}
              position={[0, 0, -5]}
              rotation={[0, 0, 0.129]}
            >
              <meshPhysicalMaterial color={"#000000"} />
            </mesh>
          </group>
          <group position={[19.102, -91.436, -3.471]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle.geometry}
              position={[0, 0, -5]}
              rotation={[0, 0, 0.129]}
            >
              <meshPhysicalMaterial color={"#FF0000"} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./ricemodel.gltf");