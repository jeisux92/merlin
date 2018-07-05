import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {
  it('create an instance', () => {
    const pipe = new ImagePipe();
    expect(pipe).toBeTruthy();
  });
  it('Should convert the url image in a url asse', () => {
    const urlImage = null;
    const pipe = new ImagePipe();
    const result = pipe.transform(urlImage);
    expect(result).toEqual('assets/img/placeholder.gif');

  });
});
