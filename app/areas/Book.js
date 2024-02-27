/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./book.css";

const Book = () => {
  const ref = React.useRef(null);
  React.useEffect(()=>{

    const footnotescripts = ref.current.querySelectorAll('.EditorTheme__footnotescript');
    if (footnotescripts) {
      let footnotescriptnumber = 0;
      for (let y of footnotescripts){
        if (y) {
          footnotescriptnumber = footnotescriptnumber + 1;
          let dataContent = y.getAttribute("data-content");
          if (dataContent) {
            y.innerHTML = '';
            y.innerHTML = footnotescriptnumber.toString() + ") " + dataContent;
          }
        }
      }
    }
  
    const footnotes = ref.current.querySelectorAll('.EditorTheme__footnote');
    if (footnotes){
      for (let x of footnotes){
        if (x) {
          x.innerHTML = '';
          x.remove();
        }
      }
    }   

  }, [ref])

  return (
    <div ref={ref}>   
      <div className="ContentEditable__root content-editable-in-editor"   spellCheck="true" data-lexical-editor="true"   role="textbox">
        <p className="EditorTheme__paragraph"  >
          <span data-lexical-text="true"></span>
        </p>
        <p className="EditorTheme__paragraph"  >
          <span className="editor-image" data-lexical-decorator="true"  >
            <div draggable="false" className="lazy-image-wrapper">
              <img src="https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" draggable="false"  />
            </div>
          </span>
          <br/>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <h1 className="EditorTheme__h1 EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true"  >수학 바이블 소개</span>
          <span data-lexical-text="true"></span>
        </h1>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <h2 className="EditorTheme__h2 EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true"  >1.  이 책을 읽으면 좋은 사람들 </span>
        </h2>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   이 책은 읽는 사람에게 수학 시험 문제를 금방 풀어낼 수 있는 능력을 키워주는 것을 목표로 하고 있지 않습니다. 이 책은 단지, 사칙연산</span>
          <span   data-content="선형대수학에서 말하는 선형변환(linear transformation)의 한 종류로 산수의 기본이 되는 덧셈, 뺄셈, 곱셈, 나눗셈의 4가지 연산을 말합니다. 정수는 그렇지 않지만 유리수는 물론 실수, 나아가 복소수도 사칙연산에 대하여 닫혀있습니다. 즉, 유리수를 가지고 아무리 사칙연산을 한다고 해도 그 결과는 유리수입니다. 단, 0으로 나누는 경우는 논외로 합니다." className="EditorTheme__footnotescript" data-lexical-text="true"  >1 </span>
          <span data-lexical-text="true">과 일차방정식</span>
          <span   data-content="방정식은 등식(equation)의 일종입니다. 등식이란 좌변과 우변이 같다는 것을 등호(=)를 갖고 진술한 수학적 표현을 말합니다. 하지만 방정식은 등식 중에서도 명제(proposition), 즉 어떤 진위의 주장이 아닌 등식에 해당합니다. 따라서 그 등식을 이루는 미지수 또는 미지의 함수가 무엇이냐에 따라서 등식이 참이 될 수도 있고, 또 거짓이 될 수도 있습니다. 방정식에서 미지수가 문제가 되는 경우 그 미지수의 차수(degree, 즉 미지수 항의 power 중 가장 큰 것)가 분모식에서 0이고 분자식에서 1이면 일차방정식이 됩니다. 방정식에서 미지의 함수가 문제가 되는 경우 미분방정식이라고 할 수 있습니다." className="EditorTheme__footnotescript" data-lexical-text="true"  >2 </span>
          <span data-lexical-text="true">을 풀 수 있는 능력을 갖춘 사람이기만 하면 책을</span>
          <strong className="EditorTheme__textBold" data-lexical-text="true"></strong>
          <span data-lexical-text="true">읽은 후</span>
          <strong className="EditorTheme__textBold" data-lexical-text="true"> 수학이 연구와 산업의 현장에서 주로 다루는 개념들은 무엇이고 또 그 개념들이 서로 어떻게 연결되어 있는지를 대략 이해할 수 있게 되길 바라는 마음</strong>
          <span data-lexical-text="true">에서 쓰여진 가벼운 분량의 교양서입니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   수학이 다루는 분야는 다양하고 방대합니다. 단, 여기서 말하는 수학은, 중고등학교와 대학교 학부에서 학생들이 공식 교육과정을 통해서 획득하게 되길 기대하는 바, 즉 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">공학수학(advanced engineering mathematics) 분야의 실용적인 이해라는 목표</strong>
          <span data-lexical-text="true">를 위해 필요한 범위에 의해 제한된 수학입니다. 더 직설적으로 표현하자면 선형대수와 미분방정식을 수월하게 다룰 수 있게 해주는 소양을 중심으로 한 수학입니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph"  >
          <span className="editor-image" data-lexical-decorator="true"  >
            <div draggable="false" className="lazy-image-wrapper">
              <img src="https://m.media-amazon.com/images/I/81IHBm3A42L._AC_UF894,1000_QL80_.jpg" alt="" draggable="false"  />
            </div>
          </span>
          <br/>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   결국 이 책을 읽으면 좋을 사람들이란, </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">현실에서 과학적 연구나 공학적인 과제를 해결하는 데에 일상적으로 사용되는 도구로서의 수학이 동원하는 개념들과 방법론들에 대한 전체적인 얼개를 조감할 수 있는 시각을 얻고자 희망하는 분들</strong>
          <span data-lexical-text="true">이라고 할 수 있습니다. 예를 들면, 학교에서 어려운 문제들을 풀어가며 수학 과목을 여러 해 배운 후 이 모든 것이 대관절 무슨 소용이고 그 내용들은 대체 서로 어떻게 연결되어 있다는 것인지 문득 궁금해진 중고등학생이나 두꺼운 공학수학 교과서에 담긴 끝도 없이 이어지는 문제들에 질려서 기말고사 직전에 갑자기 그 개념들만이라도 노트 몇 페이지에 담아 큰 그림을 한 번 그려보고 싶어진 공대 2학년생이 바로 그런 분들이 될 수도 있을 것입니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   이런 부류의 목표를 가진 책들이나 자료들은 흔하게 접할 수 있으며 이 책은 그런 많은 자료들 중 하나에 불과합니다. 그리고 이 책이 전달하려는 수학에 대한 관점도 일면적인 것입니다. 비상한 두뇌를 가지신 분들은 초보적인 통찰만을 담은 이 책을 굳이 시간을 내어 읽을 이유는 없으며 바로 </span>
          <a href="https://www.yes24.com/Product/Goods/86144580" rel="noopener" className="EditorTheme__link EditorTheme__ltr" dir="ltr">
            <span data-lexical-text="true">KREYSZIG</span>
          </a>
          <span data-lexical-text="true"> 책을 정독 또는 복습하는 것이 더 흥미진진한 경험을 줄 것 같습니다. 하지만 누군가 단숨에 소화할 수 있는 주마간산의 경험을 원한다면 그 분에게는 이 책이 의미가 있을 것 같습니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <h2 className="EditorTheme__h2 EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true"  >2.  이 책이 수학을 설명하는 태도</span>
        </h2>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true">   이 책은 그 설명에 있어서 수학적 엄밀함을 추구하지 않으며 증명을 필수로 생각하지도 않습니다.</span>
          <span   data-content="이 책 저자의 능력이나 소양이 이러한 것을 욕심낼 수준이 되지 못한다는 사정도 있습니다." className="EditorTheme__footnotescript" data-lexical-text="true"  >3 </span>
          <span data-lexical-text="true"> 특히 시험문제를 풀 수 있는 능력을 키워주려고 노력하지 않습니다. 이러한 것들은 다른 전문서와 수험서의 과제이지 교양서에 불과한 이 책의 과제는 아니며 그보다는 글을 읽은 후에 독자가 어떤 직관적 이해를 획득하였다고 충분히 느끼도록 하는 것이 이 책의 과제입니다. 여기서 말하는 ‘어떤 직관적 이해’ 란 예컨대, </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">실제로 접하게 되는 어떤 공학적 문제의 상황 하에서 특정 수학적 기술이 동원이 되는 이유를 납득하거나 나아가 스스로 어떤 수학적 지식을 능동적으로 이 상황에 연관시키는 지적 능력을 갖추게 되는 것</strong>
          <span data-lexical-text="true">을 말합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true">   그래서 이 책은 수학을 설명함에 있어서 표현의 엄밀함이나 증명, 나아가 문제 풀이에 의한 연습을 강조하지 않습니다. 그 대신 이 책은 개념만을 주로 강조하고, 무엇보다도 개념들 사이의 연관성의 이해를 주로 추구합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <blockquote className="EditorTheme__quote EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true"  >즉, 이 책은 불완전할지언정 </span>
          <strong className="EditorTheme__textBold EditorTheme__textUnderline" data-lexical-text="true"  >개념 그 자체를 제시하는 것에 최선</strong>
          <span data-lexical-text="true"  >을 다할 뿐 수학적 표현의 엄밀함이나 증명, 문제 풀이를 통해서 개념의 이해에 도달하려고 추구하지 않습니다. </span>
        </blockquote>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true">   여기서 개념을 제시한다는 것은 특별히 다음과 같은 의미입니다. 이 책은 수학식의 전개가 일종의 목적적 활동이라고 간주합니다. 수학적 개념을 제시하는 것은 수학식의 전개를 보여주는 것에 의존해있기 마련입니다. 그리고 수학식의 전개는 필연적인 전개여야 하기 때문에 흔히 사람들은 이러한 전개과정을 기계적이거나 인과적인 것처럼 생각하기 쉽습니다. </span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <blockquote className="EditorTheme__quote EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true"  >이 책은 수학식의 전개가, 이를 수행하는 사람이 품은 목적과 계획 하에서만 비로소 제대로 이해될 수 있는 언어적 표현이므로 </span>
          <strong className="EditorTheme__textBold EditorTheme__textUnderline" data-lexical-text="true"  >맥락이 달라지면 동일한 수학식의 전개도 그 의미가 전혀 달라질 수 있다</strong>
          <span data-lexical-text="true"  >고 생각합니다. </span>
        </blockquote>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   그래서 이 책은 수학식의 전개를 보여줄 필요가 있을 때마다 그 전개가 목표로 하고 있는 것이 무엇이고 그 단계들 하나하나가 그 목표와의 관련성 속에서 대체 어떤 의미가 있는지 충분히 보여주려고 노력할 것입니다. 그렇게 함으로써 수학적 개념들이 무슨 목표를 갖고 있고 그 개념들 사이에는 어떠한 관련성이 있는지를 이해하려고 노력할 것입니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   이 책을 읽었다고 해도 수학시험에서 좋은 성적을 얻지는 못할 것입니다. 하지만 이 책을 성공적으로 읽은 사람이라면 좀 시간이 걸리더라도 정답지를 보지 않고도 자료를 찾아가며 대부분의 기본적인 문제들을 결국 풀어낼 수 있게 될 지 모릅니다. 왜냐하면 이 책은 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">수학적 해법이 필요해지는 상황과 수학적 개념을 실제로 연결시키는 능력</strong>
          <span data-lexical-text="true">을 키우는 것에 거의 전적으로 집중하고 있기 때문입니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <h2 className="EditorTheme__h2 EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true"  >3.  이 책이 수학을 다루는 순서</span>
        </h2>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   이 책은 우선 삼각형과 원이라고 하는 두 가지 도형을 살펴보는 방식으로 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">초등함수(elementary function)</strong>
          <span data-lexical-text="true">라고 불리는 네 종류</span>
          <span    data-content="여기서는 다항함수, 지수함수, 로그함수, 삼각함수를 말합니다. 초등함수는 이러한 함수들을 합성하여 만든 함수도 함께 지칭하고 또 삼각함수는 지수함수로 표현할 수 있기 때문에 별도로 열거할 필요가 없다고 생각할 수도 있지만 이 책은 초등함수의 대수학적 정의를 엄밀하게 추구하는 것은 아니고 편의적인 목적으로 함수들의 유형론을 제시하기 위하여 초등함수라는 용어를 사용하기 때문에 초등함수에는 네 가지 종류가 있다는 정도로 취급하기로 하겠습니다." className="EditorTheme__footnotescript" data-lexical-text="true"  >4 </span>
          <span data-lexical-text="true">의 함수 유형에 대한 기초적인 이해를 도모하고 코사인 법칙, 삼각함수의 덧셈정리, 자연상수에 관한 오일러 공식 등 이와 관련된 주요 정리나 증명도 소개합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   그다음 이렇게 함수의 몇 가지 유형들에 대하여 어느 정도 익숙해졌다는 느낌이 들 즈음에 우리는 각 함수 유형에 대한 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">미분과 적분</strong>
          <span data-lexical-text="true">은 어떻게 할 수 있는지를 하나씩 생각해볼 것입니다. 특히 다변수함수의 미분인 </span>
          <span data-lexical-text="true"  >편미분</span>
          <span data-lexical-text="true">에 대하여 알아 본 후 </span>
          <span data-lexical-text="true"  >함수의 미분</span>
          <span data-lexical-text="true">과 구분되는 </span>
          <span data-lexical-text="true"  >방정식의 미분</span>
          <span data-lexical-text="true">이라는 강학상 개념을 편의적으로 제안하는 방법으로 </span>
          <span data-lexical-text="true"  >음함수의 미분과 전미분</span>
          <span data-lexical-text="true">을 쉽게 이해해보려고 합니다. 그렇게 하고 나면 우리는 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">다변수 스칼라함수의 미적분, 일(매개)변수 벡터함수의 미적분 그리고 다변수 벡터함수의 미적분</strong>
          <span data-lexical-text="true">, 즉 </span>
          <span data-lexical-text="true"  >벡터 해석학(vector calculus)</span>
          <span data-lexical-text="true">의 핵심 정리들을 적어도 개념적으로는 다루어볼 수 있게 됩니다. 미분과 관련해서는 다변수 스칼라함수의 다변수 벡터함수로의 변환인 </span>
          <span data-lexical-text="true"  >그래디언트</span>
          <span data-lexical-text="true">, 다변수 벡터함수의 다변수 스칼라함수로의 변환인 </span>
          <span data-lexical-text="true"  >발산</span>
          <span data-lexical-text="true">, 다변수 벡터함수의 변환인 </span>
          <span data-lexical-text="true"  >회전</span>
          <span data-lexical-text="true">, 그리고 적분과 관련해서는 </span>
          <span data-lexical-text="true"  >그린-스톡스 정리, 발산 정리</span>
          <span data-lexical-text="true">가 바로 그것들입니다. 이 책의 특징상 이 정리들이 말하고자 하는 바와 그것들의 상호관계(특히, 그래디언트의 회전과 회전의 발산과 그 관계성에 기초한 </span>
          <span data-lexical-text="true"  >게이지변환</span>
          <span data-lexical-text="true">의 두 가지 개념)에 주목할 뿐이지 그 이상을 욕심내지 않습니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   그리고 이상과 같이 익힌 미적분에 대한 이해를 기반으로 아마도 우리는 가까스로 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">변분법(calculus of variations)</strong>
          <span data-lexical-text="true">, 즉 </span>
          <span data-lexical-text="true"  >범함수(functional)의 미적분</span>
          <span data-lexical-text="true">이라는 아이디어를 이해할 수 있게 될 것입니다. 함수의 미적분을 할 때 독립변수와 종속변수의 </span>
          <span data-lexical-text="true"  >미분소(infinitesimal)</span>
          <span data-lexical-text="true">를 생각하는 것처럼 변분법의 경우에도 함수 자체의 작은 변화 부분을 생각하는데 바로 이것이 </span>
          <span data-lexical-text="true"  >변분(variation)</span>
          <span data-lexical-text="true">입니다. 범함수는 함수 자체를 독립변수와 종속변수로 갖는 함수이기 때문에 범함수의 미적분의 경우에는 변분이 기능적으로 미분소 개념을 대신합니다. 바로 이 점에 착안할 수 있다면 이 정도의 준비만으로도 변분법의 개념 자체를 이해하는 입구에 들어서는 정도는 가능해진다고 할 수 있습니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   함수의 미적분에서는 그 함수가 최대값 또는 최소값을 갖게 되는 조건을 찾기 위해 보통 그 함수를 미분하여 도함수를 구하게 됩니다. 그리고 그 도함수가 0이 되는 조건이 바로 그런 최대값 내지 최소값을 갖는 조건을 표현한 대수방정식이 됩니다. </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">마찬가지로 변분법에서도 어떤 조건 하에서 범함수의 적분값이 최대값 또는 최소값을 갖는지를 알고자 하며 함수의 미적분에서처럼 변분법에서도 그 조건을 어떤 식의 값이 0이 되는 조건, 즉 방정식의 형태로 구하게 됩니다.</strong>
          <span data-lexical-text="true"> 그런데 변분법에서는 그 방정식이 대수방정식이 아니라 </span>
          <span data-lexical-text="true"  >미분방정식(differential equation)</span>
          <span data-lexical-text="true">의 성격을 갖습니다. 그 대표적인 것이 </span>
          <span data-lexical-text="true"  >오일러-라그랑주 방정식(Euler–Lagrange equation)</span>
          <span data-lexical-text="true">입니다. </span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   여기서 우리는 드디어 미분방정식을 만나게 됩니다. 그런데 미분방정식은 이미 우리가 자주 접해왔던 어떤 것이라는 점을 알 수 있습니다.  </span>
          <span data-lexical-text="true"  >뉴턴의 운동방정식</span>
          <span data-lexical-text="true">을 힘(force)을 정의하는 정의식으로 이해할 수도 있습니다만 만약 우리가 어떤 힘을 상수 함수나 위치의 함수의 형태로 알고 있다면 이 함수를 이 운동방정식에 대입함으로써 이 운동방정식을 어떤 시간의 위치 함수를 구할 수 있는 조건을 알려주는 </span>
          <span data-lexical-text="true"  >2계 선형 미분방정식</span>
          <span data-lexical-text="true">으로 만들 수 있기 때문입니다. 이제 우리는 이미 살펴본 </span>
          <strong className="EditorTheme__textBold" data-lexical-text="true">함수의 미적분과 미분방정식이 개념적으로 연결고리를 갖는 지점</strong>
          <span data-lexical-text="true">을 확인하는 방법으로 미분방정식 문제가 미적분의 문제와 어떻게 다르고 또 어떻게 서로 연관되어 있는지를 이해해보려고 할 것입니다. 그러한 이해를 바탕으로 </span>
          <span data-lexical-text="true"  >미분방정식의 분류</span>
          <span data-lexical-text="true">에 대하여도 간단히 정리할 계획입니다. 특히 오일러-라그랑주 방정식이 왜</span>
          <span data-lexical-text="true"  > 2계 비선형 미분방정식</span>
          <span data-lexical-text="true">으로 분류되는지를 이해해볼 것입니다. </span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   이 정도의 논의를 하고 나면 우리는, 수학이 도움을 줄 수 있는 어떤 현실 문제를 해결하기 위해서 사람들은 우선 문제되는 상황을 함수 또는 범함수로 표현한 후 이 함수 내지 범함수로부터 어떤 조건, 즉 미분방정식을 포함하는 방정식을 도출하게 되고 이렇게 구해진 방정식의 해를 구함으로써 원래의 문제를 해결한다고 하는, 어떤 반복되는 패턴을 발견할 수 있게 됩니다. 이제 새로운 개념을 배우는 것을 잠시 쉬고 이 패턴을 마음에 담은 채로 잘 알려진 문제들 몇 개에 대하여 해법을 실제로 구하는 연습을 해볼 것입니다. </span>
          <span data-lexical-text="true"  >라그랑주 승수법(Lagrange mulitplier method)</span>
          <span data-lexical-text="true">이 그 중 하나입니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   흔히 </span>
          <span data-lexical-text="true"  >모델링(modelling)</span>
          <span data-lexical-text="true">이라고 불리는 작업, 즉 당면하고 있는 문제적 상황을 함수 또는 범함수로 표현할 때 표현하기에는 좋지만 문제해결에는 나쁜 함수와 표현하기에는 나쁘지만 문제해결에는 좋은 함수가 있을 수 있습니다. 이런 경우 일단 표현하기에 용이한 함수로 모델링을 한 후 이 함수를 문제해결에 편리한 함수로 변환하는 기술이 유용할 수 있습니다. 이러한 변환의 대표적인 수학적 기술인 </span>
          <span data-lexical-text="true"  >라플라스 변환(Laplace Transformation)과 그 특별한 경우인 푸리에 변환(Fourier Transformation) 그리고 그 특별한 경우인 페이저 변환(Phasor Transformation)</span>
          <span data-lexical-text="true">의 이모저모를 감상해볼 것입니다. 미분방정식의 해를 구하기 위한 방법으로서 이해를 해보고 난 후 그 변환 과정에서 특별히 정의역을 공유하는 두 함수를 곱하여 적분한다는 것이 갖게되는 의미를 곰곰이 생각해보고 이로써 </span>
          <span data-lexical-text="true"  >선형대수</span>
          <span data-lexical-text="true">로 가는 길을 열어보려고 합니다. </span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   그리고 마찬가지의 맥락에서 이번에는 함수가 아니라 미분방정식에 있어서 풀기 어려운 2계 미분방정식에서 풀기 쉬운 </span>
          <span data-lexical-text="true"  >1계 미분방정식</span>
          <span data-lexical-text="true">으로 변환하는 유명한 사례 하나를 익혀볼 것입니다. 이것은 다변수함수의 성질을 가진 라그랑지안을 역시 함수 변환 방법인 </span>
          <span data-lexical-text="true"  >르장드르 변환(Legendre Transformation)</span>
          <span data-lexical-text="true">을 하여 </span>
          <span data-lexical-text="true"  >해밀토니안</span>
          <span data-lexical-text="true">을 구하는 방법을 이용한 사례입니다.  만약 오일러-라그랑주 방정식에서의 다변수함수인 </span>
          <span data-lexical-text="true"  >라그랑지안</span>
          <span data-lexical-text="true">이 특별히 운동에너지에서 위치에너지를 뺀 값으로 정의되는 계(system)에서는 그 라그랑지안을 르장드르 변환을 통해서 해밀토니안이라는 다변수함수로 변환하게 되면 그 해밀토니안은 곧 운동에너지와 위치에너지의 합을 의미하게 되고 나아가 이를 통해 오일러-라그랑주 방정식도 그 유명한 </span>
          <span data-lexical-text="true"  >해밀턴 정준 방정식(canonical equation)</span>
          <span data-lexical-text="true">으로 변환할 수 있다는 점을 확인하려고 합니다. 이 해밀턴 정준 방정식이 단순한 형태의 1계 미분방정식이 된다는 사정이 문제 해결에서 유리하게 되는 이유도 확인해보려고 합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   정의역을 공유하는 두 함수를 곱하여 적분한다는 것은 결국 일종의 </span>
          <span data-lexical-text="true"  >행렬곱</span>
          <span data-lexical-text="true">을 의미하는 것이라는 점을 다시 확인해보고 행렬곱에서의 </span>
          <span data-lexical-text="true"  >내적(dot product)이 갖는 두 가지 의미</span>
          <span data-lexical-text="true">를 생각해볼 계획입니다. 내적이 일차적으로는 두 벡터 사이의 </span>
          <span data-lexical-text="true"  >유사성(similarity)의 정도</span>
          <span data-lexical-text="true">를 구하는 산술적 방법이라고 이해하는 것이 보통지만, 행렬곱에서는 하나의 열벡터가 </span>
          <span data-lexical-text="true"  >여러 열벡터들 사이의 가중치를 대표</span>
          <span data-lexical-text="true">하는 상황에서 그 여러 열벡터들을 이러한 가중치를 반영하여 하나의 열벡터로 바꾸는 산술적 방법이라고 이해하는 것이 보통입니다. 그리고 두 산술적 방법은 계산방법의 동일성에도 불구하고 그 맥락과 목표가 구분되는 것처럼 보입니다. 이것을 두고 하나의 동일한 수학적 전개에 대하여 두 가지 해석을 하고 있다고 말할 수 있을 것입니다. 하지만 이 책은 이것들은 정말로 서로 다른 목적 하의 서로 다른 활동이고 단지 동일한 수학적 기술을 이용하였을 뿐이라고 말하고자 합니다. 즉 이 책은 동일한 내적(dot product) 연산이 두 경우에 서로 다른 의미를 가지는 상황을 있는 그대로 직시하는 것을 선호합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   이렇게 벡터와 벡터의 내적을 살펴본 것은 물론 행벡터와 행렬의 행렬곱도 살펴보았고 행렬과 열벡터의 행렬곱도 단편적이지만 실질적 의미를 부여해보면서 곰곰히 생각해본 셈입니다. 여기서 행렬과 열벡터의 행렬곱의 다른 의미를 생각해보려고 합니다. 이는 선형변환(linear transformation)입니다. 어떤 열벡터를 다른 열벡터로 변환하는 방법으로 행렬과 그 열벡터를 행렬곱하는 경우를 말합니다. 그 사례로서 2계 연립 선형 미분방정식의 해를 선형대수로 구하는 방법을 소개합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr"  >
          <span data-lexical-text="true">   끝으로 행렬이 어떤 데이터를 의미하는 경우 선형대수가 이 데이터에 대하여 알려줄 수 있는 것은 무엇인지와 이 데이터 행렬에 대응하는 어떤 열벡터를 찾으면 이 열벡터를 가지고 새로운 데이터를 기초로 한 합리적인 예측을 할 수 있게 되는지를 살펴보고 이것이 사실은 선형 연립방정식의 해를 구하는 것과 기본적으로 같다는 것을 이해하려고 합니다. 이와 관련한 연습으로 기계학습 일반에서의 </span>
          <span data-lexical-text="true"  >역전파 알고리즘</span>
          <span data-lexical-text="true">과 ChatGPT와 같은 언어모델에서의 </span>
          <span data-lexical-text="true"  >어텐션 알고리즘</span>
          <span data-lexical-text="true">에 대하여 이해를 해보려고 합니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <h2 className="EditorTheme__h2 EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true"  >4.  백지와 연필 그리고 차 한 잔을 권하며</span>
        </h2>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p className="EditorTheme__paragraph EditorTheme__ltr" dir="ltr">
          <span data-lexical-text="true">   위 소개의 글을 읽어보면 너무 다루려는 범위가 방대한 것 아닌지 걱정하는 분도 있을 것이라는 생각도 듭니다. 하지만 크게 걱정할 필요는 없습니다. 이 책은 가볍게 읽을 수 있는 주마간산의 교양서에 불과합니다. 멀찌감치 뒤로 물러서서 바라보면 분명하게 볼 수 있지만 정작 숲 속을 거닐 때에는 너무 거대해서 눈에 띄이지 않는 그런 것들을 미소로 새삼 바라볼 수 있는 기회를 제공할 수 있게 된다면 이 책을 쓴 보람이 있을 것 같습니다.</span>
        </p>
        <p className="EditorTheme__paragraph">
          <br/>
        </p>
        <p    className="EditorTheme__footnote"  >1) 선형대수학에서 말하는 선형변환(linear transformation)의 한 종류로 산수의 기본이 되는 덧셈, 뺄셈, 곱셈, 나눗셈의 4가지 연산을 말합니다. 정수는 그렇지 않지만 유리수는 물론 실수, 나아가 복소수도 사칙연산에 대하여 닫혀있습니다. 즉, 유리수를 가지고 아무리 사칙연산을 한다고 해도 그 결과는 유리수입니다. 단, 0으로 나누는 경우는 논외로 합니다.
          <br/>
        </p>
        <p    className="EditorTheme__footnote"  >2) 방정식은 등식(equation)의 일종입니다. 등식이란 좌변과 우변이 같다는 것을 등호(=)를 갖고 진술한 수학적 표현을 말합니다. 하지만 방정식은 등식 중에서도 명제(proposition), 즉 어떤 진위의 주장이 아닌 등식에 해당합니다. 따라서 그 등식을 이루는 미지수 또는 미지의 함수가 무엇이냐에 따라서 등식이 참이 될 수도 있고, 또 거짓이 될 수도 있습니다. 방정식에서 미지수가 문제가 되는 경우 그 미지수의 차수(degree, 즉 미지수 항의 power 중 가장 큰 것)가 분모식에서 0이고 분자식에서 1이면 일차방정식이 됩니다. 방정식에서 미지의 함수가 문제가 되는 경우 미분방정식이라고 할 수 있습니다.
          <br/>
        </p>
        <p    className="EditorTheme__footnote"  >3) 이 책 저자의 능력이나 소양이 이러한 것을 욕심낼 수준이 되지 못한다는 사정도 있습니다.
          <br/>
        </p>
        <p    className="EditorTheme__footnote"  >4) 여기서는 다항함수, 지수함수, 로그함수, 삼각함수를 말합니다. 초등함수는 이러한 함수들을 합성하여 만든 함수도 함께 지칭하고 또 삼각함수는 지수함수로 표현할 수 있기 때문에 별도로 열거할 필요가 없다고 생각할 수도 있지만 이 책은 초등함수의 대수학적 정의를 엄밀하게 추구하는 것은 아니고 편의적인 목적으로 함수들의 유형론을 제시하기 위하여 초등함수라는 용어를 사용하기 때문에 초등함수에는 네 가지 종류가 있다는 정도로 취급하기로 하겠습니다.
          <br/>
        </p>
      </div>
    </div>
  );
};

export default Book;