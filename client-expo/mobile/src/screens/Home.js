import { FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { ListItem2 } from '../components';
const ItemList = [
    { id: 1, name: 'Informacion Escolar ', icon: 'edit', open: 'MyStack', open: 'FormularioDePago' },
    { id: 2, name: 'Carrera', icon: 'archive', open: 'FormularioDePago' },
    { id: 3, name: 'Plan de Estudios', icon: 'trello', open: 'FormularioDePago' },
    { id: 4, name: 'Módulo de Especialidad ', icon: 'menu', open: 'FormularioDePago' },
    { id: 5, name: 'Situación de Vigencia', icon: 'menu', open: 'FormularioDePago' },
    { id: 6, name: 'Promedio', icon: 'menu', open: 'FormularioDePago' },
    { id: 7, name: 'Créditos Acumulados', icon: 'menu', open: 'FormularioDePago' },
    { id: 8, name: 'Periodo de Ingreso', icon: 'menu', open: 'FormularioDePago' },
    { id: 9, name: 'Número de Periodos Convalidados', icon: 'menu', open: 'FormularioDePago' },
    { id: 10, name: 'Periodo Actual o Último', icon: 'menu', open: 'FormularioDePago' },
    { id: 11, name: 'Tutor', icon: 'menu', open: 'FormularioDePago' },
    { id: 12, name: 'Adeudos', icon: 'menu', open: 'FormularioDePago' },
    { id: 13, name: 'Detalle', icon: 'menu', open: 'FormularioDePago' },
    { id: 14, name: 'Tickets Generados', icon: 'menu', open: 'FormularioDePago' },
    { id: 15, name: 'Abrir un Ticket', icon: 'menu', open: 'FormularioDePago' },
];
export default function Home() {
    return (
        <FlatList
            data={ItemList}
            renderItem={ListItem2}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingVertical: 50 }}
            

        />
    );
}