import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import {
    Container,

    Form,
    FormTitle, Logo
} from './styles';





const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');    

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Login" />
                <h2>Finanças</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>
                <img src={logoImg} alt="Financas" />
                Identificação
                </FormTitle>

                <Input 
                    type="email"
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

               <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;