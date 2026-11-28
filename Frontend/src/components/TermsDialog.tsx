import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';

type TermsDialogProps = {
  open: boolean;
  onAgree: () => void;
  onDisagree: () => void;
  onClose: () => void;
};

export default function TermsDialog({ open, onAgree, onDisagree, onClose }: TermsDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        sx={{ '& .MuiDialog-paper': { backgroundColor: 'var(--app-background-color)', borderRadius: '20px' } }}
      >
        <DialogTitle id="responsive-dialog-title" sx={{ fontFamily: 'Space Mono', fontSize: 'var(--app-font-size-second)', color: 'var(--app-font-color-primary)' }}>
          {"Terminos y Condiciones"}
        </DialogTitle>
        <Divider sx={{ borderColor: 'var(--app-border-color)' }} />
        <DialogContent>
          <DialogContentText sx={{ fontFamily: 'Space Mono', fontSize: 'var(--app-font-size-third)', color: 'var(--app-font-color-primary)', textAlign: 'justify' }}>
            Autorizo a Veeduria Distrital para recolectar, almacenar y tratar los datos personales suministrados a través de este canal, con el fin de dar cumplimiento a la finalidad para la cual fueron recolectados, de conformidad con lo establecido en la Ley 1581 de 2012 y demás normas concordantes.
          </DialogContentText>
          <DialogContentText sx={{ fontFamily: 'Space Mono', fontSize: 'var(--app-font-size-third)', color: 'var(--app-font-color-primary)', textAlign: 'justify' }}>
            Como titular de la información, me asisten los derechos previstos en las leyes 1266 de 2008, 1581 de 2012 y cualquier otra que la derogue, modifique o sustituya. En especial, me asiste el derecho a conocer, actualizar y rectificar y/o suprimir mis datos personales frente a los responsables del tratamiento o encargado del tratamiento, solicitar prueba de esta autorización, ser informado sobre su uso, presentar quejas ante la Superintendencia de Industria y Comercio, revocar esta autorización, solicitar la supresión de mis datos y consultar los mismos.
          </DialogContentText>
        </DialogContent>
        <Divider sx={{ borderColor: 'var(--app-border-color)' }} />
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
          <Button variant="outlined" autoFocus onClick={()=>{onClose(); onDisagree();}} sx={{ color: 'var(--app-font-color-primary)', '&:hover': { backgroundColor: 'var(--app-icon-hover-color)' }, borderRadius:'10px', borderColor:'var(--app-border-color)', fontFamily: 'Space Mono', fontSize: 'var(--app-font-size-third)' }}>
            No Acepto
          </Button>
          <Button variant="outlined"  onClick={()=>{onClose(); onAgree();}} autoFocus sx={{ color: 'var(--app-font-color-primary)', '&:hover': { backgroundColor: 'var(--app-icon-hover-color)' }, borderRadius:'10px', borderColor:'var(--app-border-color)', fontFamily: 'Space Mono', fontSize: 'var(--app-font-size-third)' }}>
            Acepto
          </Button>
        </DialogActions>
      </Dialog>
  );
}