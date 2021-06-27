import Faq from 'react-faq-component';
import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const data = {
    rows: [
        {
            title: 'What is Hungry Hugger?',
            content: `Hungry Hugger is the digital marketplace connecting you to local food lovers. If you’re looking for one platform to promote and sell your food services, products or experiences, then create a basic profile and you can set up your online shop on Hungry Hugger.`,
        },
        {
            title: 'Who is it designed for?',
            content:
                'Our platform is designed for anyone with a passion for quality good food and drink. Whether you have a professional culinary background or just opened your first business, Hungry Hugger gives you access to a global community of food lovers who are hungry for quality authentic food and drink.',
        },
        {
            title: 'How does it work?',
            content: `Start by setting up your profile, where you can tell your story, talk about your specialties and show customers your passion for your craft. You’ll then need to select the service tags for the types of services and jobs you want to provide. This allows food lovers to find your profile quickly and easily when they’re searching the marketplace. You’ll also be able to quickly set up your shop. This will be the one-stop digital shop for your business, where you can easily manage all of your products and experiences in one place.`,
        },
        {
            title: 'I am an aspiring or independent maker, can I sign-up and create a profile?',
            content: `Yes! Not everyone is ready from day one — we’re passionate about connecting with all food lovers. You can start by building a professional profile, then choose a path that’s suitable for you and your business.`,
        },
        {
            title: 'Can I advertise my workshop or festival on your platform?',
            content: `We do not support one-off event listings. As long as your experience is hosted by a dedicated food maker, your unique experience can be listed onto the platform once you created your basic profile.`,
        },
        {
            title: 'Got an announcement?',
            content: `If you have an announcement that you would like us to share with the community, please submit a media release at least 5 days in advance to hello@hungryhugger.com or submit via your account dashboard. This will make sure we can share your announcement in time.`,
        },
    ],
};

const styles = {
    titleTextColor: 'rgb(49,57,77)',
    rowTitleColor: 'rgb(49,57,77)',
    rowContentColor: '#6f7583',
    titleTextSize: '48px',
    rowTitleTextSize: '21px',
    transitionDuration: '.24s',
    rowContentTextSize: '14px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '35px',
    rowContentPaddingRight: '20px',
};

const WrapperForCross = styled.div`
    width: 11px;
`;
const Wrapper = styled.div`
    width: 940px;
    margin: 0 auto;
`;

const config = {
    animate: true,
    arrowIcon: (
        <WrapperForCross>
            <VscChromeClose />
        </WrapperForCross>
    ),
};

export function Dropdown() {
    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            rows[0].expand();
        }
    }, [rows]);

    return (
        <Wrapper>
            <div>
                <p class="faq-title">Frequently Asked Questions</p>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                    getRowOptions={setRowsOption}
                />
            </div>
        </Wrapper>
    );
}
