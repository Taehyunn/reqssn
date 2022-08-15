<template>
  <div>
    <div class="container">
      <div class="upstair_layout">
        <div class="title_content">
          <p>주민등록초본</p>
          <p><b>김신한</b>님</p>
        </div>

        <article>
          <form action="" method="post">
            <fieldset>
              <!-- basic page Start -->
              <div class="text_area">
                <p class="text_area_title">주민등록상 주소</p>
                <input
                  type="text"
                  placeholder=""
                  onclick="location.href='4-2-1. 주소 찾기.html'"
                  required
                />
              </div>

              <div class="text_area">
                <p class="text_area_title">행정관할 기관</p>

                <div class="input_wrap InstShowBtn">
                  <input
                    type="text"
                    placeholder=""
                    class="inputRotate"
                    required
                  />
                  <button type="button" class="iconNaviArrow">
                    <img
                      src="../assets/img/icon-navi-arrow-1-line-20-down.png"
                      alt="icon navi arrow"
                    />
                  </button>
                </div>
              </div>

              <div class="text_area">
                <p class="text_area_title">발급받을 사람</p>

                <div class="input_wrap TargetShowBtn">
                  <input
                    type="text"
                    placeholder=""
                    class="inputRotate"
                    required
                  />
                  <button type="button" class="iconNaviArrow">
                    <img
                      src="../assets/img/icon-navi-arrow-1-line-20-down.png"
                      alt="icon navi arrow"
                    />
                  </button>
                </div>
              </div>
              <!-- basic page End -->

              <!-- 본인 이름/주민등록번호 folding Start -->
              <div class="NameId1">
                <div class="text_area">
                  <p class="text_area_title">이름</p>

                  <div class="input_wrap">
                    <input type="text" placeholder="" required />
                  </div>
                </div>

                <div class="text_area">
                  <p class="text_area_title">주민등록번호</p>

                  <div class="input_wrap">
                    <input type="text" placeholder="" id="SSN1" required />

                    <div
                      class="id_number_arrange"
                      onclick="document.getElementById('SSN1').focus()"
                    >
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>

                      <span class="id_number_divider"></span>

                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 이름/주민등록번호 folding End -->

              <!-- 가족 이름/주민등록번호 folding Start -->
              <div class="NameId2">
                <div class="text_area">
                  <p class="text_area_title">가족 이름</p>

                  <div class="input_wrap">
                    <input type="text" placeholder="" required />
                  </div>
                </div>
                <div class="text_area">
                  <p class="text_area_title">가족 주민등록번호</p>

                  <div class="input_wrap">
                    <input type="text" placeholder="" id="SSN2" required />

                    <div
                      class="id_number_arrange"
                      onclick="document.getElementById('SSN2').focus()"
                    >
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>

                      <span class="id_number_divider"></span>ㅆ택

                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                      <span class="id_number_circle"></span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 이름/주민등록번호 folding End -->
            </fieldset>

            <!-- radio section Start -->
            <form action="" method="get">
              <fieldset class="radio_section">
                <div class="radio_arrange">
                  <input
                    type="radio"
                    name="output_way"
                    value="basic issue"
                    id="radio_icon1"
                    checked
                  />
                  <label for="radio_icon1" class="DefaultIssue"
                    ><span></span
                  ></label>
                  <p class="bottom_checkbox_text">기본 발급</p>
                </div>
                <div class="radio_arrange">
                  <input
                    type="radio"
                    name="output_way"
                    value="select issue"
                    id="radio_icon2"
                  />
                  <label for="radio_icon2" class="SelectIssue"
                    ><span></span
                  ></label>
                  <p class="bottom_checkbox_text">선택 발급</p>
                </div>
              </fieldset>
            </form>
            <!-- radio section End -->
          </form>
        </article>
      </div>
    </div>

    <!-- 선택발급 folding layer Start -->
    <div class="accordion_container selection_issue">
      <article>
        <form action="" method="post">
          <fieldset class="content">
            <section>
              <div class="title_paragraph">
                <h2>과거 주소 변동 사항</h2>
                <div class="horizontal_arrange">
                  <h3>기간 설정</h3>
                  <div class="PeriodShowBtn">
                    <h3>전체기간</h3>
                    <img
                      src="../assets/img/icon-navi-arrow-1-line-16-right.png"
                      alt=">"
                    />
                  </div>
                </div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox1" />
                <label for="bottom_checkbox1"></label>
                <div class="bottom_checkbox_text">세대주 성명&#47;관계</div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox2" />
                <label for="bottom_checkbox2"></label>
                <div class="bottom_checkbox_text">발생일&#47;신고일</div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox3" />
                <label for="bottom_checkbox3"></label>
                <div class="bottom_checkbox_text">변동사유</div>
              </div>
            </section>

            <!-- -------------------------------------------------------------------------------- -->
            <div class="thin_section_divider"></div>
            <!-- -------------------------------------------------------------------------------- -->
            <section>
              <div class="title_paragraph">
                <h2>주민등록번호</h2>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox4" />
                <label for="bottom_checkbox4"></label>
                <div class="bottom_checkbox_text">주민등록번호 뒷자리</div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox5" />
                <label for="bottom_checkbox5"></label>
                <div class="bottom_checkbox_text">
                  국내거소신고&#47;외국인 등록번호
                </div>
              </div>
            </section>

            <!-- -------------------------------------------------------------------------------- -->
            <div class="thin_section_divider"></div>
            <!-- -------------------------------------------------------------------------------- -->

            <section>
              <div class="title_paragraph">
                <h2>과거 주소 변동 사항</h2>
                <div class="horizontal_arrange">
                  <h3>세대주와의 관계</h3>
                  <h3>전체</h3>
                  <img
                    src="../assets/img/icon-navi-arrow-1-line-16-right.png"
                    alt=">"
                  />
                </div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox6" />
                <label for="bottom_checkbox6"></label>
                <div class="bottom_checkbox_text">개인 인적 사항 변경 내역</div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox7" />
                <label for="bottom_checkbox7"></label>
                <div class="bottom_checkbox_text">
                  세대주 성명과 세대주와의 관계
                </div>
              </div>
            </section>

            <!-- -------------------------------------------------------------------------------- -->
            <div class="thin_section_divider"></div>
            <!-- -------------------------------------------------------------------------------- -->
            <section>
              <div class="title_paragraph">
                <h2>병역사항</h2>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox8" />
                <label for="bottom_checkbox8"></label>
                <div class="bottom_checkbox_text">전체</div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox9" />
                <label for="bottom_checkbox9"></label>
                <div class="bottom_checkbox_text">미포함</div>
              </div>

              <div class="usual_checkbox_layer">
                <input type="checkbox" value="" id="bottom_checkbox10" />
                <label for="bottom_checkbox10"></label>
                <div class="bottom_checkbox_text">입영&#47;전역일자</div>
              </div>
            </section>
          </fieldset>
        </form>
      </article>
    </div>
    <!-- 선택발급 folding layer End -->

    <!-- bottom fixed layer Start -->
    <form action="" method="post">
      <fieldset>
        <div class="bottom_layer">
          <div class="bottom_checkbox_layer">
            <input
              type="checkbox"
              value="개인정보 제3자 제공 동의"
              id="bottom_checkbox11"
            />
            <label for="bottom_checkbox11"></label>
            <div class="only_bottom_checkbox_text">
              &#91;선택&#93; 개인정보 제3자 제공 동의
            </div>
            <img
              src="../assets/img/icon-navi-arrow-1-line-20-right.png"
              alt=">"
            />
          </div>

          <div class="bottom_btn_wrap">
            <button class="btn_primary">발급하기</button>
          </div>
        </div>
      </fieldset>
    </form>
    <!-- bottom fixed layer End -->

    <div class="blackOn"></div>

    <!-- 행정관할기관 Modal Start -->
    <div class="modal_layer institution">
      <div class="modal_title">
        <p>행정관할기관을 선택해주세요.</p>
        <img
          src="../assets/img/icon-navi-close-line-24.png"
          alt="X"
          class="ModalCloseBtn"
        />
      </div>
      <input type="radio" />
      <label>서울특별시 강남구 역삼1동</label>
      <label>서울특별시 강남구 역삼2동</label>
    </div>
    <!-- 행정관할기관 Modal End -->

    <!-- 발급받을사람 Modal Start -->
    <div class="modal_layer target">
      <div class="modal_title">
        <p>발급 대상을 선택해주세요.</p>
        <img
          src="../assets/img/icon-navi-close-line-24.png"
          alt="X"
          class="ModalCloseBtn"
        />
      </div>
      <input type="radio" />
      <label class="myself">본인</label>
      <label class="family">내 가족&#40;세대 구성원&#41;</label>
    </div>
    <!-- 발급받을사람 Modal End -->

    <!-- 과거주소기간 Modal Start -->
    <div class="modal_layer period">
      <div class="modal_title">
        <div>
          <p>과거 주소 기간을<br />선택해주세요.</p>
        </div>
        <img
          src="../assets/img/icon-navi-close-line-24.png"
          alt="X"
          class="ModalCloseBtn"
        />
      </div>
      <input type="radio" />
      <label>전체 기간</label>
      <label>표시 안함</label>
      <label class="MoveToDirect">직접 입력</label>
    </div>
    <!-- 과거주소기간 Modal End -->

    <!-- 직접입력 Modal Start -->
    <div class="btn_modal_layer direct_selection">
      <div class="btn_modal_inner">
        <div class="btn_modal_title">
          <p>
            조회할 과거 주소의 기간을<br />
            입력해주세요.
          </p>
          <img
            src="../assets/img/icon-navi-close-line-24.png"
            alt="X"
            class="ModalCloseBtn"
          />
        </div>
        <div class="btn_modal_input_wrap">
          <p>최근</p>
          <input type="text" placeholder="" class="inputRotate" required />
          <p>년</p>
        </div>
      </div>

      <div class="two_btn_layer">
        <button class="btn_back">뒤로</button>
        <button class="btn_confirm">확인</button>
      </div>
    </div>
    <!-- 직접입력 Modal End -->
  </div>
</template>

<script>
export default {
  name: "Req_SSN",
  data: () => ({}),
  mounted() {
    // 이해를 돕기위한 허접한 시연입니다. 전부 삭제해주세요. + CSS 마지막 줄에 표시해둔 단락도 삭제해야합니다.
    const InstShowBtn = document.querySelector(".InstShowBtn");
    const TargetShowBtn = document.querySelector(".TargetShowBtn");
    const PeriodShowBtn = document.querySelector(".PeriodShowBtn");
    const MoveToDirect = document.querySelector(".MoveToDirect");
    const btn_back = document.querySelector(".btn_back");
    const BottomLayout = document.querySelector(".bottom_layer");
    // const ModalCloseBtn = document.querySelector(".ModalCloseBtn");
    const blackOn = document.querySelector(".blackOn");
    const InstModal = document.querySelector(".institution");
    const TargetModal = document.querySelector(".target");
    const PeriodModal = document.querySelector(".period");
    const directModal = document.querySelector(".direct_selection");
    document.querySelectorAll(".ModalCloseBtn").forEach((CB) => {
      CB.addEventListener("click", () => {
        blackOn.style.display = "none";
        InstModal.style.display = "none";
        TargetModal.style.display = "none";
        PeriodModal.style.display = "none";
        directModal.style.display = "none";
        BottomLayout.style.display = "block";
        document.body.classList.remove("stop-scroll");
      });
    });
    blackOn.addEventListener("click", function () {
      blackOn.style.display = "none";
      InstModal.style.display = "none";
      TargetModal.style.display = "none";
      PeriodModal.style.display = "none";
      directModal.style.display = "none";
      BottomLayout.style.display = "block";
      document.body.classList.remove("stop-scroll");
    });
    InstShowBtn.addEventListener("click", function () {
      blackOn.style.display = "block";
      InstModal.style.display = "block";
      BottomLayout.style.display = "none";
      document.body.classList.add("stop-scroll");
    });
    TargetShowBtn.addEventListener("click", function () {
      blackOn.style.display = "block";
      TargetModal.style.display = "block";
      BottomLayout.style.display = "none";
      document.body.classList.add("stop-scroll");
    });
    PeriodShowBtn.addEventListener("click", function () {
      blackOn.style.display = "block";
      PeriodModal.style.display = "block";
      BottomLayout.style.display = "none";
      document.body.classList.add("stop-scroll");
    });
    MoveToDirect.addEventListener("click", function () {
      blackOn.style.display = "block";
      directModal.style.display = "block";
      PeriodModal.style.display = "none";
      BottomLayout.style.display = "none";
      document.body.classList.add("stop-scroll");
    });
    btn_back.addEventListener("click", function () {
      PeriodModal.style.display = "block";
      blackOn.style.display = "block";
      directModal.style.display = "none";
      BottomLayout.style.display = "none";
      document.body.classList.add("stop-scroll");
    });
    const myself = document.querySelector(".myself");
    const family = document.querySelector(".family");
    const NameId1 = document.querySelector(".NameId1");
    const NameId2 = document.querySelector(".NameId2");
    myself.addEventListener("click", function () {
      NameId1.classList.add("on");
    });
    family.addEventListener("click", function () {
      NameId1.classList.remove("on");
    });
    family.addEventListener("click", function () {
      NameId2.classList.add("on");
    });
    myself.addEventListener("click", function () {
      NameId2.classList.remove("on");
    });
    myself.addEventListener("click", function () {
      blackOn.style.display = "none";
      TargetModal.style.display = "none";
      BottomLayout.style.display = "block";
      document.body.classList.remove("stop-scroll");
    });
    family.addEventListener("click", function () {
      blackOn.style.display = "none";
      TargetModal.style.display = "none";
      BottomLayout.style.display = "block";
      document.body.classList.remove("stop-scroll");
    });
    document.addEventListener("DOMContentLoaded", () => {
      const accordion = document.querySelector(".selection_issue");
      const DefaultIssue = document.querySelector(".DefaultIssue");
      const SelectIssue = document.querySelector(".SelectIssue");
      SelectIssue.addEventListener("click", () => {
        accordion.classList.add("on");
      });
      DefaultIssue.addEventListener("click", () => {
        accordion.classList.remove("on");
      });
    });
  },
  methods: {},
};
</script>

<style scoped></style>
