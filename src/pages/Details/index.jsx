import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tags';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


import { Section } from '../../components/Section';

export function Details() {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo velit,
              dolorem consequatur tenetur adipisci omnis vitae perspiciatis 
              nesciunt! Minima consequatur atque eum obcaecati adipisci voluptate 
              dolor animi sapiente fugiat ad.
            </p>

            <Section title="Links úteis">
              <Links>
                <li><a href="#">https://www.rocketseat.com.br</a></li>
                <li><a href="#">https://www.rocketseat.com.br</a></li>
              </Links>

            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="node" />

            </Section>


            <Button title="Voltar" />
          </Content>
        </main>
      </Container>
    </>
  )
}