import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #484C7F;
        }

        strong {
            margin-top: 2rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            color: #484C7F;
        }

        &.highlight-background {
            background: var(--shape);
            color: #484C7F;
        }
    }
`;