import tw, { styled, css } from 'twin.macro'

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const StylizedTab = styled.button`
    ${tw`text-base  text-center`};
    color: #fff;
    width: 100%;
    padding: 10px 0px;
    background-color: transparent;
    cursor: ${(p) => p.disabled ? "default" : "pointer"};
    ${(p) => p.active && css`color: #12FFC9;`};
    ${(p) => !p.active && p.inactiveStyle};
`
export const StylizedTabPanel = styled.div`
    ${tw`py-5 md:p-10`}
    display: ${(p)=> (p.active ? 'flex': 'none')};
    background: #393e46;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content:space-between;
`
export const TabsHolder = styled.div`
    display: flex;
    // flex-direction: column;
`

export const inactiveTab = {
    opacity: 0.65,
}