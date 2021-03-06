import { BelongsToMany, Column, Model, Table, Default, DataType } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

import { SongModel, SongArtist } from 'models';

@Table({ tableName: 'artists' })
export class ArtistModel extends Model<ArtistModel> {
  @Column({ type: DataType.UUID, primaryKey: true, defaultValue: UUIDV4 })
  public id: string;

  @BelongsToMany(() => SongModel, () => SongArtist)
  public songs: SongModel[];

  @Column
  public name: string;

  @Column
  public spotifyId: string;

  @Column
  public spotifyUrl: string;

  @Default(new Date())
  @Column
  public createdAt: Date;

  @Default(new Date())
  @Column
  public updatedAt: Date;
}
