import { AtributeWrapper, MainStatusWrapper } from "./styles";

export default function MainStatus({ }) {
  const atributes = [
    {label: 'Força', name: 'for'},
    {label: 'Destreza', name: 'des'},
    {label: 'Constituição', name: 'con'},
    {label: 'Sabedoria', name: 'sab'},
    {label: 'Inteligência', name: 'int'},
    {label: 'Carisma', name: 'car'},
  ];

  return (
    <MainStatusWrapper>
      {atributes.map(atribute =>
        <AtributeWrapper>
          <label>{atribute.label}</label>
          <input value={10} />
          <span>+0</span>
        </AtributeWrapper>
      )}
    </MainStatusWrapper>
  )
}