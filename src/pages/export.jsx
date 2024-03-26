import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';


const ExportPage = () => {
    return (
      <Page name="Data Export">
        <Navbar title="Data Export" />
        <div class="page">
            <div class="page-content infinite-scroll-content infinite-scroll-top">
            <Block>
              <Block>
                <label>
                  <input type="checkbox" />
                  Medications
                </label>

                <label class="item-content">
                  <div class="item-inner">
                    <div class="item-title">Include all recorded times:</div>
                    <div class="item-after">
                      <div class="toggle toggle-init">
                        <input type="checkbox" />
                        <span class="toggle-icon"></span>
                      </div>
                    </div>
                  </div>
                </label>

                <p>Time: </p>
                {/* TODO: replace start & end dates */}
                <p>Start: Monday; December 11, 2023 </p>
                <p>End: Thursday; December 14, 2023 </p>
              
                <p>Tags:</p>

                <p>Medicines: </p>
                  <label>
                    <input type="checkbox" />
                    Lisinopril
                  </label>
                  <label>
                    <input type="checkbox" />
                    Metformin
                  </label>
              </Block>

              <Block>
                <label>
                  <input type="checkbox" />
                  Timeline
                </label>
                <label class="item-content">
                  <div class="item-inner">
                    <div class="item-title">Include all recorded times:</div>
                    <div class="item-after">
                      <div class="toggle toggle-init">
                        <input type="checkbox" />
                        <span class="toggle-icon"></span>
                      </div>
                    </div>
                  </div>
                </label>
                <p>Time: </p>
                {/* TODO: replace start & end dates */}
                <p>Start: Monday; December 11, 2023 </p>
                <p>End: Thursday; December 14, 2023 </p>
              

                <p>Tags:</p>
                

              </Block>

              <Block>
                <label>
                  <input type="checkbox" />
                  Graphs
                </label>
                <label class="item-content">
                  <div class="item-inner">
                    <div class="item-title">Include all recorded times:</div>
                    <div class="item-after">
                      <div class="toggle toggle-init">
                        <input type="checkbox" />
                        <span class="toggle-icon"></span>
                      </div>
                    </div>
                  </div>
                </label>
                <p>Time: </p>
                {/* TODO: replace start & end dates */}
                <p>Start: Monday; December 11, 2023 </p>
                <p>End: Thursday; December 14, 2023 </p>
              
                <p>Tags:</p>

              </Block>
            </Block>
                <div class="preloader infinite-scroll-preloader"></div>
            </div>
        </div>


      </Page>
    );
};

export default ExportPage;
