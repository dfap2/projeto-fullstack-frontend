import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --brand-color-1: #4529E6;
        --brand-color-2: #5126EA;
        --brand-color-3: #B0A6F0;
        --brand-color-4: #EDEAFD;

        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4DA;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;

        --alert-color-1: #CD2B31;
        --alert-color-2: #FDD8D8;
        --alert-color-3: #FFE5E5;

        --green-success-1: #18794E;
        --green-success-2: #CCEBD7;
        --green-success-3: #DDF3E4;

        --random-1: #E34D8C;
        --random-2: #C04277;
        --random-3: #7D2A4D;
        --random-4: #7000FF;
        --random-5: #6200E3;
        --random-6: #36007D;
        --random-7: #349974;
        --random-8: #2A7D5F;
        --random-9: #153D2E;
        --random-10: #6100FF;
        --random-11: #5700E3;
        --random-12: #30007D;

        --radius-default: 4px;

        font-size: 60%;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;
