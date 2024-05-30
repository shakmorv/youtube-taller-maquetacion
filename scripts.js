(   (d) =>{
        const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

        $btnMenu.addEventListener("click",(e)=>{
            $btnMenu.firstElementChild.classList.toggle('none');
            $btnMenu.lastElementChild.classList.toggle('none');
            $menu.classList.toggle("is-active");
        })

        $menu.addEventListener("click",e=>{
            if(!e.target.matches("a")){
                return false;
            }
            $btnMenu.firstElementChild.classList.remove('none');
            $btnMenu.lastElementChild.classList.add('none');
            $menu.classList.toggle("is-active");
        })
    }
)(document);

(
    (d) =>{
        const $form = d.querySelector(".contact-form"),
        $loader= d.querySelector(".contact-form-loader"),
        $response=d.querySelector(".contact-form-response");
        $form.addEventListener("submit",(e)=>
            {
                e.preventDefault();
                $loader.classList.remove("none");
                const url = "https://formsubmit.co/ajax/dadi_srl1@yahoo.com";
                fetch(url,{
                 method: "POST",
                 body: new FormData(e.target)
                }).then(
                    (res) => (res.ok ? res.json(): Promise.reject(res))
                ).then(
                    (json) => {
                        console.log(json);
                        $loader.classList.add("none");
                        location.hash = "#gracias";
                        $form.reset();
                    }
                    
                ).catch(
                    (err) =>{
                        console.log(err);
                        let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
                        $response.querySelector("h3").innerHTML = `Error: ${err.status}: ${message}`;
                    }
                ).finally(
                    () =>{
                        $loader.classList.add("none");
                        setTimeout(
                            ()=>{
                                location.hash = "#close";
                            }
                            ,3000
                        )
                    }
                );
            }
        )
    }
)(document);