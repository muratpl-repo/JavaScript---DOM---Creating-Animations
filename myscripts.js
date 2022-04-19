window.onload = function(){
            var pozX = 0, pozY=0, pozZ=150, pozD=150;
            var kucukkutu = document.getElementById("kucukkutu");
            var zaman = setInterval(hareketEt,1);

            

            function hareketEt(){
                if(pozX >=150){
                    if(pozY>=150){
                        
                        if(pozZ < 0){
                            
                            if(pozD <= 0){
                                //clearInterval(zaman)
                                pozX = 0;
                                pozY = 0;
                                pozZ = 150;
                                pozD = 150;
                            }
                            else{
                                pozD--;
                                kucukkutu.style.top = pozD + "px";
                            }
                        } 
                        else{
                            pozZ--;
                            kucukkutu.style.left = pozZ + "px";
                        }
                    }
                    else{
                        pozY++;
                        kucukkutu.style.top = pozY + "px";
                    }
                }
                else{
                    pozX++;
                    kucukkutu.style.left = pozX + "px";
                }
            }
        }

