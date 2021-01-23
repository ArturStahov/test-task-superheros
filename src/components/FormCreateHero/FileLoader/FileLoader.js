import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import {
  LoaderWrapper,
  ImgPreview,
  TitlePreview,
  Label,
} from './StyledComponent';
import NoImage from 'images/ico/no-hero.png';

export default function FileLoader({ onUploadFile, isClearPreview }) {
  const [previewUrl, setPreviewUrl] = useState('');
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (isClearPreview) {
      setPreviewUrl('');
      setFileName('');
    }
  }, [isClearPreview]);

  const handlerUploadFile = async file => {
    let reader = new FileReader();
    try {
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        onUploadFile(reader.result);
      };

      const isLt2M = file && file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        throw new Error('Image must smaller than 2MB!');
      }

      setFileName(
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      );

      if (file) {
        reader.readAsDataURL(file);
        // onUploadFile(file)
      } else {
        setPreviewUrl('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoaderWrapper>
      <input
        accept=".jpg, .png, .jpeg"
        id="contained-button-file"
        onChange={e => handlerUploadFile(e.target.files[0])}
        type="file"
      />
      <Label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Image
        </Button>
      </Label>
      <ImgPreview
        src={previewUrl ? previewUrl : NoImage}
        height="200"
        alt="Image preview..."
      />
      <TitlePreview>{fileName}</TitlePreview>
    </LoaderWrapper>
  );
}
