// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';
// import { Box, Button } from '@mui/material';

// type Props = {
//     totalAmount: number;
//     onBack: Function;
//     onPlaceOrder: Function;
// }

// const products = [
//     {
//         name: 'Product 1',
//         desc: 'A nice thing',
//         price: '$9.99',
//     },
//     {
//         name: 'Product 2',
//         desc: 'Another thing',
//         price: '$3.45',
//     },
//     {
//         name: 'Product 3',
//         desc: 'Something else',
//         price: '$6.51',
//     },
//     {
//         name: 'Product 4',
//         desc: 'Best thing of all',
//         price: '$14.11',
//     },
//     { name: 'Shipping', desc: '', price: 'Free' },
// ];
// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//     { name: 'Card type', detail: 'Visa' },
//     { name: 'Card holder', detail: 'Mr John Smith' },
//     { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//     { name: 'Expiry date', detail: '04/2024' },
// ];

// export default function OrderSummary(props: Props) {
//     const { totalAmount } = props;

//     return (
//         <React.Fragment>
//             <Typography variant="h6" gutterBottom>

//             </Typography>
//             <Typography component="h1" variant="h6" align="center">
//                 Order summary
//             </Typography>

//             <hr style={{ width: '90%', color: 'gray', marginBottom: '40px' }} />

//             <List disablePadding>
//                 {products.map((product) => (
//                     <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
//                         <ListItemText primary={product.name} secondary={product.desc} />
//                         <Typography variant="body2">{product.price}</Typography>
//                     </ListItem>
//                 ))}

//                 <hr style={{ width: '100%', color: 'gray', marginBottom: '40px' }} />

//                 <ListItem sx={{ py: 1, px: 0 }}>
//                     <ListItemText primary="Total" />
//                     <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
//                         ${totalAmount}
//                     </Typography>
//                 </ListItem>
//             </List>

//             <hr style={{ width: '100%', color: 'gray', marginBottom: '40px' }} />

//             <Grid container spacing={2}>

//                 <Grid item xs={12} >
//                     <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//                         Shipping
//                     </Typography>
//                     <Typography gutterBottom>John Smith</Typography>
//                     <Typography gutterBottom>{addresses.join(', ')}</Typography>
//                 </Grid>

//                 <Grid item container direction="column" xs={12}>
//                     <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//                         Payment details
//                     </Typography>
//                     <Grid container>
//                         {payments.map((payment) => (
//                             <React.Fragment key={payment.name}>
//                                 <Grid item xs={6}>
//                                     <Typography gutterBottom>{payment.name}</Typography>
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Typography gutterBottom>{payment.detail}</Typography>
//                                 </Grid>
//                             </React.Fragment>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>

//             <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Button onClick={() => props.onBack()} sx={{ mt: 3, ml: 1 }}>
//                     Back
//                 </Button>
//                 <Button
//                     variant="contained"
//                     onClick={() => props.onPlaceOrder()}
//                     sx={{ mt: 3, ml: 1 }}
//                 >
//                     Place order
//                 </Button>
//             </Box>
//         </React.Fragment>
//     );
// }