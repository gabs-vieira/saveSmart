import { PropsWithChildren } from 'react'

export function Authentication({ children }: PropsWithChildren) {
    // Auth barrier

    return (
        <>{children}</>
    );
}

// interface BatataProps {
//     label?: string;
//     id: string;
//     user: {
//         name: string
//     }

//     children: ReactNode
// }

// export const Batata = ({ children, id, user, label }: BatataProps) => {
//     return (
//         <p style={{ color: '#f0f'}}>
//             {children}
//         </p>
//     )
// }