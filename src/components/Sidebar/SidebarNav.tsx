import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDatabaseLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function SidebarNav() {
    return(
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiContactsLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiDatabaseLine} href="/users">Usuários</NavLink>
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiGitMergeLine} href="/forms">Formulários</NavLink>
                <NavLink icon={RiInputMethodLine} href="/automation">Usuários</NavLink>
            </NavSection>            
        </Stack>
    )
}