"use strict";
            const btn = document.querySelector(".btn");


            const calculate = (e) => {

                let py = document.querySelector(".python").value;
                let math = document.querySelector(".math").value;
                let phy = document.querySelector(".physics").value;
                let chemi = document.querySelector(".chemistry").value;
                let eng = document.querySelector(".english").value;
                py = parseFloat(py);
                math = parseFloat(math);
                phy = parseFloat(phy);
                chemi = parseFloat(chemi);
                eng = parseFloat(eng);
                if (  py > 100 || math > 100|| chemi > 100 || phy > 100 || eng > 100) {
                    let showResult = document.querySelector(".showResult").innerHTML = `Please Enter Valid No.`;
                    e.preventDefault();
                }
                else if ( py > 100 || math > 100 || chemi > 100 || phy > 100 ||  eng < 100 ) {
                    let obtain_marks = math + chemi + phy + eng + py;
                    // alert(obtain_marks)
                    let percentage = (obtain_marks * 100) / 500;
                    let grade = '';
                    if (percentage <= 100 && percentage >= 80) {
                        grade = 'A';
                    }
                    else if (percentage >= 60 && percentage < 80) {
                        grade = 'B';
                    }
                    else if (percentage >= 45 && percentage < 60) {
                        grade = 'C';
                    }
                    else if (percentage >= 33 && percentage < 45) {
                        grade = 'D';
                    } 

                    else {
                        grade = 'f';
                    }
                    if (percentage >= 33) {
                        let showResult = document.querySelector(".showResult").innerHTML = `You have Obtained ${obtain_marks} out of 500 with ${percentage}% and ${grade} .You are pass.`;
                    }
                    else {
                        let showResult = document.querySelector(".showResult").innerHTML = `You have Obtained ${obtain_marks} out of 500 with ${percentage}% and ${grade} .You are fail.`;
                    }
                    e.preventDefault();
                }
            }


        btn.addEventListener("click",calculate)