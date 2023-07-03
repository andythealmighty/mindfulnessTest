var test = new Vue({
    el: '#test',
    data: {
        intro: '마음챙김 척도 테스트를 \n시작합니다!',
        title: '마음챙김 척도 테스트',
        currentIndex: 0,
        qna: [],
        result: ''
    },
    beforeMount: function() {
        this.insertQna('Q1. 나는 사물을 탐구하는 것을 좋아한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q2. 나는 새로운 아이디어를 거의 만들지 못한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q3. 나는 일을 하는 새로운 방식에 항상 관심을 가진다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q4. 나는 내가 하는 모든 일에 “충분히” 주의를 기울인다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q5. 나는 새로운 것을 배우려고 적극적으로 노력하지 않는다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q6. 나는 새로운 공헌을 많이 한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q7. 나는 이미 오랫동안 실천되고 있는 바른 방식으로 일을 하고 있다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q8. 나는 다른 사람들이 무엇을 하는지 거의 알아차리지 못한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q9. 나는 생각을 하게 만드는 대화를 피한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q10. 나는 아주 창의적이다', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q11. 나는 같은 상황에서도 여러 가지 다른 방식으로 행동할 수 있다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q12. 나는”큰 그림(전체 상황)”에 주의를 기울인다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q13. 나는 아주 호기심이 많다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q14. 나는 일을 하는 새로운 방식들을 생각해내려고 노력한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q15. 나는 바뀐 것들을 거의 알아차리지 못한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q16. 나는 모든 것 대해, 심지어 나의 핵심적인 믿음을 흔드는 것에 대해서까지 열린 마음을 지니고 있다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q17. 나는 지적으로 도전받는 것을 좋아한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q18. 나는 새롭고 효과적인 아이디어를 생각해낸다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q19. 나는 새로 개발된 것을 거의 알아차리지 못한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q20. 나는 일이 어떻게 이루어지게 되는지 파악하기를 좋아한다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
        this.insertQna('Q21. 나는 독창적으로 생각하는 사람이 아니다.', ['1. 전혀 그렇지않다','2. 그렇지 않다','3. 약간 그렇지 않다','4. 보통이다','5. 약간 그렇다','6. 그렇다','7. 매우 그렇다'], null);
    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();
    },
    methods: {
        insertQna: function(q, a, t) {
            var item = {
                q: q,
                a: a,
                r: '',
                t: t
            };
            this.qna.push(item);
        },
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();

            var self = this;
            setTimeout(function() {
                if(typeof self.qna[0].t != 'undefined' && self.qna[0].t != null) {
                    $('#q0a0').attr('type', self.qna[0].t);
                    $('#q0a0').focus();
                }
            }, 200);
        },
        next: function () {
            var self = this;
            if(this.currentIndex < this.qna.length-1) {
                this.currentIndex++;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                var check = true;
                for(var i=0; i < this.qna.length; i++) {
                    if(this.qna[i].r === '') {
                        check = false;
                    }
                }
                if(check) {
                    this.showResult();
                } else {
                    alert("아직 완료되지 않았습니다.");
                }
            }
        },
        prev: function () {
            var self = this;
            if(this.currentIndex > 0) {
                this.currentIndex--;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                alert('첫 질문입니다.');
            }
        },
        showResult: function() {
            var x = 0;
            const question = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            for (let i = 0; i < 21; i++) {
                if(i == 1 || i == 4 || i == 6 || i == 7 || i == 8 || i == 14 || i == 18 || i == 20) {
                    if(this.qna[i].r == '1. 전혀 그렇지않다') {
                        x += 7;
                        question[i] = 7;
                    }
                    if(this.qna[i].r == '2. 그렇지 않다') {
                        x += 6;
                        question[i] = 6;
                    }
                    if(this.qna[i].r == '3. 약간 그렇지 않다') {
                        x += 5;
                        question[i] = 5;
                    }
                    if(this.qna[i].r == '4. 보통이다') {
                        x += 4;
                        question[i] = 4;
                    }
                    if(this.qna[i].r == '5. 약간 그렇다') {
                        x += 3;
                        question[i] = 3;
                    }
                    if(this.qna[i].r == '6. 그렇다') {
                        x += 2;
                        question[i] = 2;
                    }
                    if(this.qna[i].r == '7. 매우 그렇다') {
                        x += 1;
                        question[i] = 1;
                    }    
                } else {
                    if(this.qna[i].r == '1. 전혀 그렇지않다') {
                        x += 1;
                        question[i] = 1;
                    }
                    if(this.qna[i].r == '2. 그렇지 않다') {
                        x += 2;
                        question[i] = 2;
                    }
                    if(this.qna[i].r == '3. 약간 그렇지 않다') {
                        x += 3;
                        question[i] = 3;
                    }
                    if(this.qna[i].r == '4. 보통이다') {
                        x += 4;
                        question[i] = 4;
                    }
                    if(this.qna[i].r == '5. 약간 그렇다') {
                        x += 5;
                        question[i] = 5;
                    }
                    if(this.qna[i].r == '6. 그렇다') {
                        x += 6;
                        question[i] = 6;
                    }
                    if(this.qna[i].r == '7. 매우 그렇다') {
                        x += 7;
                        question[i] = 7;
                    }
                }
            }
            var a = question[2] + question[6] + question[10] + question[15];
            var b = question[1] + question[5] + question[9] + question[13] + question[17] + question[20];
            var c = question[3] + question[7] + question[11] + question[14] + question[18];
            var d = question[0] + question[4] + question[8] + question[12] + question[16] + question[19] ;
            this.result =  '당신의 마음챙김 점수는 '+ Math.round(x/147*100) +'점 입니다.\n각 영역별 점수를 살펴보면\n융통성 ' + Math.round(a/28*25) + '점\n 독창성 ' + Math.round(b/42*25) + '점\n몰입성 ' + Math.round(c/35*25) + '점\n탐구성 ' + Math.round(d/42*25) + '점입니다';
            $('#main').hide();
            $('#result').show();
        }
    }
});
